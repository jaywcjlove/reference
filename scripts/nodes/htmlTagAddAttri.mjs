export function htmlTagAddAttri(node) {
  if (node && node.tagName === 'html') {
    node.properties['data-color-mode'] = 'dark';
  }
}