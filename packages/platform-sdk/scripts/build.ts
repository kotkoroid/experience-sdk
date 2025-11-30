import { rmSync } from 'node:fs';

// Clean dist directory and tsbuildinfo
rmSync('./dist', { recursive: true, force: true });
rmSync('./tsconfig.tsbuildinfo', { force: true });
rmSync('./tsconfig.lib.tsbuildinfo', { force: true });

// Bundle source files
await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  target: 'node',
  format: 'esm',
  minify: false,
  splitting: false,
  external: ['alchemy'],
});

// Generate type declarations
await Bun.$`bunx tsc --build tsconfig.lib.json`;

console.log('Build completed successfully!');

export {};
