import { getCodeString } from 'rehype-rewrite';
import { getVNode } from './getSVGNode.mjs';

export function rehypePreviewHTML(node, parent) {
  if (node.type === 'element' && node.tagName === 'pre' && node.properties?.className?.includes('language-html')) {
    const child = node.children[0];
    if (child?.tagName === 'code' && child.data?.meta === 'preview') {
      const code = getCodeString(node.children);
      const vnode = getVNode(code || '');
      node.children = vnode;
    }
  }
}
