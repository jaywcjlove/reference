import path from 'path';
import chokidar from 'chokidar';
import { getStat } from 'recursive-readdir-files';
import { run, DOCS, createHTML, copyCSSFile, copyJSFile } from './index.mjs';

(async () => {
  await run();
  const homeMdPath = path.relative(process.cwd(), 'README.md');
  const cssDirPath = path.relative(process.cwd(), 'scripts/style');
  const jsDirPath = path.relative(process.cwd(), 'scripts/js');
  const watcher = chokidar.watch([DOCS, homeMdPath, cssDirPath, jsDirPath], {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
  });

  watcher
    .on('change', async (filepath) => {
      if (filepath.endsWith('.md')) {
        const stats = await getStat(filepath);
        createHTML([stats]);
      }
      if (filepath.endsWith('.css')) {
        copyCSSFile(filepath);
        console.log(`♻️ \x1b[32;1m ${path.relative(cssDirPath, filepath)} \x1b[0m`);
      }
      if (filepath.endsWith('.js')) {
        copyJSFile(filepath);
        console.log(`♻️ \x1b[32;1m ${path.relative(jsDirPath, filepath)} \x1b[0m`);
      }
    })
    .on('error', (error) => console.log(`Watcher error: ${error}`));
})();
