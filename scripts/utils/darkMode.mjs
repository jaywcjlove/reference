import path from 'path';
import { getSVGNode } from './getSVGNode.mjs';

const ICONS_PATH = path.resolve(process.cwd(), 'scripts/assets');

export function darkMode({ homePath = '', isHome } = {}) {
  const relativePath = homePath.replace(/[\\/]?index.html$/, isHome ? '' : '/');
  const iconSunPath = path.resolve(ICONS_PATH, `sun.svg`);
  const iconMoonPath = path.resolve(ICONS_PATH, `moon.svg`);
  const sunNode = getSVGNode(iconSunPath);
  const moonNode = getSVGNode(iconMoonPath);
  const darkJSUrl = relativePath + 'js/dark.js';
  return [
    {
      type: 'element',
      tagName: 'button',
      properties: {
        id: 'darkMode',
        type: 'button',
      },
      children: [...sunNode, ...moonNode],
    },
    {
      type: 'element',
      tagName: 'script',
      properties: {
        src: darkJSUrl,
      },
    },
  ];
}
