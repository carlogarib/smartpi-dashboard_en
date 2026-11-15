import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import path from 'node:path';

export const UPLOT_VERSION = '1.6.32';
export const UPLOT_SHA256 = '5dd9b3281aa64b461b42d9945f6adb2649d346502b12281a9ae0d46599a80eba';

// Keep this small source patch reviewable. Never silently apply it to an upgrade.
function replaceFunction(source, name, nextMarker, replacement) {
  const startMarker = `function ${name}(`;
  const start = source.indexOf(startMarker);
  const end = source.indexOf(nextMarker, start);
  if (start < 0 || end < 0 || source.indexOf(startMarker, start + 1) >= 0)
    throw new Error(`uPlot source shape changed around ${name}; review the hardening patch.`);
  return source.slice(0, start) + replacement + '\n\n' + source.slice(end);
}

export function hardenUplot(source, version) {
  if (version !== UPLOT_VERSION) throw new Error(`uPlot version ${String(version)} is not reviewed; expected ${UPLOT_VERSION}.`);
  if (typeof source !== 'string' || createHash('sha256').update(source).digest('hex') !== UPLOT_SHA256)
    throw new Error('uPlot source SHA256 checksum changed; review the hardening patch before building.');

  // An own constructor in JSON must not make a plain object bypass safe copying.
  // Inspect prototype descriptors without evaluating an object's constructor getter.
  source = replaceFunction(source, 'isObj', 'function fastIsObj(', `function isObj(v) {
  if (v == null || typeof v != 'object') return false;
  let proto = Object.getPrototypeOf(v);
  while (proto !== null) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, 'constructor');
    if (descriptor !== undefined)
      return Object.prototype.hasOwnProperty.call(descriptor, 'value') &&
        (descriptor.value == null || descriptor.value === Object);
    proto = Object.getPrototypeOf(proto);
  }
  return true;
}`);

  source = replaceFunction(source, 'copy', 'function assign(', `function copy(o, _isObj = isObj) {
  let out;
  if (isArr(o)) {
    let val = o.find(v => v != null);
    if (isArr(val) || _isObj(val)) {
      out = Array(o.length);
      for (let i = 0; i < o.length; i++) out[i] = copy(o[i], _isObj);
    }
    else out = o.slice();
  }
  else if (o instanceof TypedArray) out = o.slice();
  else if (_isObj(o)) {
    out = {};
    for (let k in o) {
      if (k !== '__proto__' && k !== 'constructor' && k !== 'prototype' &&
          Object.prototype.hasOwnProperty.call(o, k))
        Object.defineProperty(out, k, {value: copy(o[k], _isObj), writable: true, enumerable: true, configurable: true});
    }
  }
  else out = o;
  return out;
}`);

  return replaceFunction(source, 'assign', '// nullModes', `function assign(targ) {
  for (let i = 1; i < arguments.length; i++) {
    let src = arguments[i];
    for (let key in src) {
      if (key !== '__proto__' && key !== 'constructor' && key !== 'prototype' &&
          Object.prototype.hasOwnProperty.call(src, key)) {
        if (Object.prototype.hasOwnProperty.call(targ, key) && isObj(targ[key]))
          assign(targ[key], copy(src[key]));
        else if (Object.prototype.hasOwnProperty.call(targ, key))
          targ[key] = copy(src[key]);
        else
          Object.defineProperty(targ, key, {value: copy(src[key]), writable: true, enumerable: true, configurable: true});
      }
    }
  }
  return targ;
}`);
}

export function uplotHardeningPlugin() {
  let patched = 0;
  return {
    name: 'reviewed-uplot-hardening',
    setup(build) {
      build.onStart(() => {patched = 0;});
      build.onLoad({filter: /[\\/]uplot[\\/]dist[\\/]uPlot\.esm\.js$/}, async args => {
        const packagePath = path.resolve(path.dirname(args.path), '../package.json');
        const [source, metadata] = await Promise.all([readFile(args.path, 'utf8'), readFile(packagePath, 'utf8')]);
        const contents = hardenUplot(source, JSON.parse(metadata).version);
        patched++;
        return {contents, loader: 'js', resolveDir: path.dirname(args.path)};
      });
      build.onEnd(result => {
        if (result.errors.length === 0 && patched !== 1)
          return {errors: [{text: `Expected one reviewed uPlot ESM module; hardened ${patched}.`}]};
      });
    },
  };
}
