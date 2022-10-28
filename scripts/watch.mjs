import path from 'path';
import chokidar from 'chokidar';
import { getStat } from 'recursive-readdir-files';
import { run, DOCS, createHTML } from './index.mjs';

(async () => {
  await run();
  const homeMdPath = path.relative(process.cwd(), 'README.md');
  const watcher = chokidar.watch([DOCS, homeMdPath], {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
  });

  watcher
    .on('change', async (path) => {
      const stats = await getStat(path);
      createHTML([stats]);
    })
    .on('error', (error) => console.log(`Watcher error: ${error}`));
})();
