import fs from 'fs-extra';
import path from 'path';
import { getSVGNode, ICONS_PATH } from './getSVGNode.mjs';

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
      if (href) {
        const iconName = path.basename(href, '.md');
        const iconPath = path.resolve(ICONS_PATH, `${iconName}.svg`);
        const iconDefaultPath = path.resolve(ICONS_PATH, `list.svg`);
        const iconExist = fs.existsSync(iconPath);
        const labelNode = {
          type: 'element',
          tagName: 'span',
          children: child.children,
        };
        if (iconExist) {
          const svgNode = getSVGNode(iconPath);
          child.children = [...svgNode, labelNode];
        } else {
          const svgNode = getSVGNode(iconDefaultPath);
          child.children = [...svgNode, labelNode];
        }
      }
      return child;
    });
  }
}
