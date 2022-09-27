export function htmlTagAddAttri(node, { isHome }) {
  if (node && node.tagName === 'html') {
    node.properties['data-color-mode'] = 'dark';
  }
  if (node && node.tagName === 'body' && isHome) {
    node.properties.class = ['home'];
  }
}