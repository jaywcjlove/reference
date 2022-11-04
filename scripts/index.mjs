import fs from 'fs-extra';
import path from 'path';
import recursiveReaddirFiles from 'recursive-readdir-files';
import { create } from './create.mjs';

export const OUTOUT = path.resolve(process.cwd(), 'dist');
export const DOCS = path.resolve(process.cwd(), 'docs');

export async function createHTML(files = [], num = 0) {
  const dataFile = files[num];
  if (!dataFile) {
    console.log(' \n done!\n');
    return;
  }
  ++num;
  const githubURL = `https://github.com/jaywcjlove/reference/blob/main/${path
    .relative(process.cwd(), dataFile.path)
    .replace(path.sep, '/')}`;

  const mdstr = await fs.readFile(dataFile.path);
  const htmlPath = path.relative(DOCS, dataFile.path);
  const outputHTMLPath = path
    .resolve(OUTOUT, 'docs', htmlPath)
    .replace(/README.md$/i, 'index.html')
    .replace(/.md$/, '.html');

  await fs.ensureDir(path.dirname(outputHTMLPath));

  const html = create(mdstr.toString(), {
    filename: path.basename(outputHTMLPath, '.html'),
    isHome: /README.md$/.test(path.relative(process.cwd(), dataFile.path)),
    githubURL,
    homePath: path.relative(path.dirname(outputHTMLPath), path.resolve(OUTOUT, 'index.html')),
    css: [
      path.relative(path.dirname(outputHTMLPath), path.resolve(OUTOUT, 'style/style.css')),
      path.relative(path.dirname(outputHTMLPath), path.resolve(OUTOUT, 'style/katex.css')),
    ],
  });
  await fs.writeFile(outputHTMLPath, html);
  console.log(`♻️ \x1b[32;1m ${path.relative(OUTOUT, outputHTMLPath)} \x1b[0m`);
  createHTML(files, num);
}

export async function run() {
  await fs.ensureDir(OUTOUT);
  await fs.emptyDir(OUTOUT);
  await fs.ensureDir(path.resolve(OUTOUT, 'style'));
  await fs.copy(path.resolve(process.cwd(), 'scripts/style'), path.resolve(OUTOUT, 'style'));
  const files = await recursiveReaddirFiles(process.cwd(), {
    ignored: /\/(node_modules|\.git)/,
    exclude: /(\.json|\.mjs|CONTRIBUTING\.md)$/,
    filter: (item) => item.ext === 'md',
  });
  createHTML(files);
}
