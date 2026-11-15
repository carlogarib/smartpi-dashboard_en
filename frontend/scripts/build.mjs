import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {writeFile} from 'node:fs/promises';
import {uplotHardeningPlugin} from './uplot-hardening.mjs';

const result = await build({
  absWorkingDir: fileURLToPath(new URL('../', import.meta.url)),
  entryPoints: ['src/main.ts'],
  bundle: true,
  format: 'esm',
  target: 'es2022',
  minify: true,
  loader: {'.css': 'text'},
  outfile: '../custom_components/smartpi_dashboard/frontend/smartpi-dashboard.js',
  plugins: [uplotHardeningPlugin()],
  logLevel: 'info',
  // Emit only after onEnd has confirmed that the reviewed module was patched.
  write: false,
});
for (const file of result.outputFiles) await writeFile(file.path, file.contents);
