import fs from 'fs-extra';
import path from 'path';
import { getCodeString } from 'rehype-rewrite';
import { getSVGNode, ICONS_PATH } from './getSVGNode.mjs';

const resultHomeCard = {};
const COLOR_REG = /background:(\s+)?rgb\(([\d]+\s+[\d]+\s+[\d]+(\s+)?)\);?/gi;

export function homeCardIcons(node, parent, isHome) {
  if (
    isHome &&
    node &&
    node.type === 'element' &&
    (node.properties?.class || node.properties?.className)?.includes('contributing')
  ) {
    const info = node.properties['data-info'];
    if (!info) {
      node.properties['data-info'] = '👆待完善需要您的参与';
    }
  }
  if (
    isHome &&
    node &&
    node.type === 'element' &&
    (node.properties?.class || node.properties?.className)?.includes('home-card')
  ) {
    node.children = node.children.map((child) => {
      const href = child.properties?.href;
      if (href && href.endsWith('.md')) {
        const iconName = path.basename(href, '.md');
        const iconPath = path.resolve(ICONS_PATH, `${iconName}.svg`);
        const iconDefaultPath = path.resolve(ICONS_PATH, `list.svg`);
        const iconExist = fs.existsSync(iconPath);
        let color = '';
        child.properties.style = child.properties.style.replace(COLOR_REG, (str) => {
          color = str.replace(COLOR_REG, '$2');
          return str.replace(/(\);)/, '/ var(--bg-opacity)$1');
        });
        const tags = child.properties['data-lang'];
        const labelNode = {
          type: 'element',
          tagName: 'span',
          children: child.children,
        };
        const title = getCodeString(child.children);
        if (iconExist) {
          const svgNode = getSVGNode(iconPath);
          child.children = [...svgNode, labelNode];
        } else {
          const svgNode = getSVGNode(iconDefaultPath);
          child.children = [...svgNode, labelNode];
        }
        resultHomeCard[iconName] = {
          md: iconName,
          title: title,
          rgb: color,
          tags: tags ? tags.split('/') : [],
        };
      }
      return child;
    });
  }
  return resultHomeCard;
}
