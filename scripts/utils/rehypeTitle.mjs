import fs from 'fs-extra';
import path from 'path';
import { getSVGNode, ICONS_PATH } from './getSVGNode.mjs';

export function rehypeTitle(node, iconName) {
  if (node.type === 'element' && node.tagName === 'h1' && iconName !== 'index') {
    const iconPath = path.resolve(ICONS_PATH, `${iconName}.svg`);
    const iconDefaultPath = path.resolve(ICONS_PATH, `list.svg`);
    const iconExist = fs.existsSync(iconPath);
    if (iconExist) {
      const svgNode = getSVGNode(iconPath);
      node.children = [...svgNode, ...node.children];
      // 如果存在返回图标名称
      return iconName;
    } else {
      const svgNode = getSVGNode(iconDefaultPath);
      node.children = [...svgNode, ...node.children];
    }
  }
}
