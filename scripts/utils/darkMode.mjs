import path from 'path';
import { getSVGNode } from './getSVGNode.mjs';

const scripts = `
  const LOCAL_NANE = '_dark_mode_theme_'
  const rememberedValue = localStorage.getItem(LOCAL_NANE);
  if (rememberedValue && ['light', 'dark'].includes(rememberedValue)) {
    document.documentElement.setAttribute('data-color-mode', rememberedValue);
  }
  const button = document.querySelector('#darkMode');
  button.onclick = () => {
    const theme = document.documentElement.dataset.colorMode;
    const mode = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-mode', mode);
    localStorage.setItem(LOCAL_NANE, mode);
  }
`;

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
    {
      type: 'element',
      tagName: 'script',
      children: [
        {
          type: 'text',
          value: scripts,
        },
      ],
    },
  ];
}
