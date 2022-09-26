import fs from 'fs-extra';
import path from 'path';
import recursiveReaddirFiles from 'recursive-readdir-files';
import { create } from './create.mjs';

const OUTOUT = path.resolve(process.cwd(), 'dist');
const DOCS = path.resolve(process.cwd(), 'docs');
const CSSPATH = path.resolve(process.cwd(), 'scripts/style.css');
const CSS_OUTPUT_PATH = path.resolve(OUTOUT, 'style/style.css');

async function createHTML(files = [], num = 0) {
  const dataFile = files[num];
  if (!dataFile) {
    console.log('\ndone!')
    return;
  }
  ++num;
  
  const mdstr = await fs.readFile(dataFile.path);
  const htmlPath = path.relative(DOCS, dataFile.path);
  const outputHTMLPath = path.resolve(OUTOUT, 'docs', htmlPath).replace(/README.md$/i, 'index.html').replace(/.md$/, '.html');

  await fs.ensureDir(path.dirname(outputHTMLPath));
  const html = create(mdstr.toString(), {
    css: [path.relative(path.dirname(outputHTMLPath), CSS_OUTPUT_PATH)]
  });
  await fs.writeFile(outputHTMLPath, html);
  console.log(`♻️ \x1b[32;1m ${path.relative(OUTOUT, outputHTMLPath)} \x1b[0m`)
  createHTML(files, num)
}

;(async () => {
  await fs.ensureDir(OUTOUT);
  await fs.emptyDir(OUTOUT);
  await fs.ensureDir(path.dirname(CSS_OUTPUT_PATH));
  await fs.copyFile(CSSPATH, CSS_OUTPUT_PATH)
  const files = await recursiveReaddirFiles(process.cwd(), {
    ignored: /\/(node_modules|\.git)/,
    exclude: /(\.json|mjs)$/,
    filter: (item) => item.ext === 'md',
  });
  createHTML(files);
})();
