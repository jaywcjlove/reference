import path from 'path';
import { getSVGNode } from './getSVGNode.mjs';

const ICONS_PATH = path.resolve(process.cwd(), 'scripts/assets');

export function darkMode() {
  const iconSunPath = path.resolve(ICONS_PATH, `sun.svg`);
  const iconMoonPath = path.resolve(ICONS_PATH, `moon.svg`);
  const sunNode = getSVGNode(iconSunPath);
  const moonNode = getSVGNode(iconMoonPath);
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
  ];
}
