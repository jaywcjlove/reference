import fs from 'fs-extra';
import path from 'path';
import recursiveReaddirFiles from 'recursive-readdir-files';
import { create } from './create.mjs';

export const OUTOUT = path.resolve(process.cwd(), 'dist');
export const DOCS = path.resolve(process.cwd(), 'docs');
/** 搜索数据路径 */
export const SEARCH_DATA = path.resolve(OUTOUT, 'data.json');
export const SEARCH_DATA_JS = path.resolve(OUTOUT, 'data.js');
export const SEARCH_DATA_CACHE = path.resolve(process.cwd(), 'node_modules/.cache/reference/data.json');

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
  const options = {
    filename: path.basename(outputHTMLPath, '.html'),
    isHome: /README.md$/.test(path.relative(process.cwd(), dataFile.path)),
    githubURL,
    homePath: path.relative(path.dirname(outputHTMLPath), path.resolve(OUTOUT, 'index.html')),
    css: [
      path.relative(path.dirname(outputHTMLPath), path.resolve(OUTOUT, 'style/style.css')),
      path.relative(path.dirname(outputHTMLPath), path.resolve(OUTOUT, 'style/katex.css')),
    ],
  };
  const { html, data } = create(mdstr.toString(), options);
  if (!options.isHome) {
    const searchData = await fs.readJSON(SEARCH_DATA_CACHE);
    data.path = path.relative(OUTOUT, outputHTMLPath).replace(/[\\/]/g, '/');
    searchData[options.filename] = data;
    searchData.name = options.filename;
    await fs.writeJSON(SEARCH_DATA_CACHE, searchData);
    const resultSearchData = Object.keys({ ...searchData })
      .map((name) => searchData[name])
      .filter((item) => typeof item !== 'string');
    await fs.writeJSON(SEARCH_DATA, resultSearchData);
    await fs.writeFile(SEARCH_DATA_JS, `const REFS_DATA = ${JSON.stringify(resultSearchData)}`);
  }
  await fs.writeFile(outputHTMLPath, html);
  console.log(`♻️ \x1b[32;1m ${path.relative(OUTOUT, outputHTMLPath)} \x1b[0m`);
  createHTML(files, num);
}

export async function copyCSSFile() {
  await fs.copy(path.resolve(process.cwd(), 'scripts/style'), path.resolve(OUTOUT, 'style'));
}

export async function copyJSFile() {
  await fs.copy(path.resolve(process.cwd(), 'scripts/js'), path.resolve(OUTOUT, 'js'));
}

export async function run() {
  try {
    await fs.ensureDir(OUTOUT);
    await fs.emptyDir(OUTOUT);
    await fs.ensureDir(path.resolve(OUTOUT, 'style'));
    await fs.ensureFile(SEARCH_DATA_CACHE);
    await fs.writeFile(SEARCH_DATA_CACHE, '{}');
    await fs.writeFile(SEARCH_DATA, '[]');
    await copyCSSFile();
    await copyJSFile();
    const files = await recursiveReaddirFiles(process.cwd(), {
      ignored: /[\\/](node_modules|\.git)/g,
      exclude: /(\.json|\.mjs|CONTRIBUTING\.md)$/,
      filter: (item) => item.ext === 'md',
    });
    createHTML(files);
  } catch (error) {
    console.log('ERR:', error);
  }
}
