import { visit } from 'unist-util-visit';
import { getCodeString } from 'rehype-rewrite';
import { getVNode } from './getSVGNode.mjs';

export function rehypePreviewHTML() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type === 'element' && node.tagName === 'pre') {
        const child = node.children[0];
        if (
          child.properties?.className?.includes('language-html') &&
          child?.tagName === 'code' &&
          child.data?.meta === 'preview'
        ) {
          const code = getCodeString(child.children);
          const vnode = getVNode(code || '');
          node.children = vnode;
        }
      }
    });
  };
}
