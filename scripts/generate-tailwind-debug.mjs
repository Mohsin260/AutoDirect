import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import { pathToFileURL } from 'url';

const root = process.cwd();
const inFile = path.join(root, 'app', 'globals.css');
const outDir = path.join(root, 'public');
const outFile = path.join(outDir, 'tailwind-debug.css');

async function run(){
  try{
    const input = await fs.promises.readFile(inFile, 'utf8');
    // Load tailwind config as module so plugin resolves custom theme values
    const configPath = path.join(root, 'tailwind.config.mjs');
    const configModule = await import(pathToFileURL(configPath).href);
    const tailwindConfig = configModule.default ?? configModule;
    const processor = postcss([
      tailwindPostcss({ config: tailwindConfig }),
      autoprefixer,
    ]);
    const result = await processor.process(input, { from: inFile, to: outFile });
    await fs.promises.mkdir(outDir, { recursive: true });
    await fs.promises.writeFile(outFile, result.css, 'utf8');
    console.log('Wrote', outFile);
  }catch(e){
    console.error('Error generating CSS:', e.stack || e);
    process.exitCode = 1;
  }
}

run();
