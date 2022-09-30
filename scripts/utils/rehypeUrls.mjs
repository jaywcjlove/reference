export function rehypeUrls(node) {
  if (node.type === 'element' && node.properties?.href && /.md/.test(node.properties.href) && !/^(https?:\/\/)/.test(node.properties.href)) {
    let href = node.properties.href;
    node.properties.href = href.replace(/([^\.\/\\]+)\.(md|markdown)/gi, '$1.html');
  }
}