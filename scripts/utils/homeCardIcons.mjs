import fs from 'fs-extra';
import rehypeParse from 'rehype-parse'
import {unified} from 'unified'
import path from 'path';
import { VFile } from 'vfile';

const ICONS_PATH = path.resolve(process.cwd(), 'scripts/assets')

function getSVGNode(iconPath) {
  const svgStr = fs.readFileSync(iconPath);
  const processor = unified().use(rehypeParse,{ fragment: true, space: "svg" })
  const file = new VFile();
  file.value = svgStr.toString();
  const hastNode = processor.runSync(processor.parse(file), file);
  return hastNode.children || []
}

export function homeCardIcons(node, parent, isHome) {
  if (isHome && node && node.type === 'element' && node.properties?.class?.includes('home-card')) {
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
        }
        if (iconExist) {
          const svgNode = getSVGNode(iconPath);
          child.children = [ ...svgNode, labelNode ];
        } else {
          const svgNode = getSVGNode(iconDefaultPath);
          child.children = [ ...svgNode, labelNode ];
        }
      }
      return child
    })
  }
}