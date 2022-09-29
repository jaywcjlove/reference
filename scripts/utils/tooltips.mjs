/**
 * 配置 tooltips 注释
 * 
 * ```markdown
 * - [超链接有 tooltips 提示](#1xx-information) _Tooltips 展示内容_ <!--rehype:tooltips-->
 * ```
 * 
 * 上面示例：将 “Tooltips 展示内容” 放到 前一个 `<a>` dom 节点作为子节点
 * 
 * - 注释配置的，前一个节点 A，A 的前一个节点 B
 * - 如果 A 和 B 其中一个不存在 `tooltips` 将失效
 * - 设置 B 的类名称为 tooltips 
 */
export function tooltips(node, index, parent) {
  if (node.type === 'comment' && parent?.children.length > 2) {
    const childs = parent?.children;
    const result = [];
    let recordPos = false; // 记录位置
    let tooltipNode = null;
    for(let i = childs.length; i > -1; i--) {
      const node = childs[i];
      // 记录 tooltip 的开始位置
      if (node?.type === 'comment' && node?.value === 'rehype:tooltips') {
        recordPos = true;
        continue
      }
      // 记录 tooltip 的 node
      if (recordPos && !tooltipNode) {
        if (node.type === 'comment' || (node.type === 'text' && !node?.value?.replace(/\s\n/g, ''))) {
          recordPos = false;
        }
        if (recordPos && node.type === 'element') {
          tooltipNode = node;
          tooltipNode.properties['class'] = 'tooltiptext';
          delete tooltipNode.position;
          continue
        }
      }
      // 将 tooltip 节点，插入到下一个 element 节点的子节点中
      if (tooltipNode) {
        if (node.type === 'comment' || (node.type === 'text' && !node?.value?.replace(/\s\n/g, ''))) {
          recordPos = false;
          tooltipNode = null
        }
        if (tooltipNode && node?.type === 'element') {
          recordPos = false;
          node.properties['class'] = 'tooltip';
          node.children.push(tooltipNode);
          tooltipNode = null
        }
      }
      if (!recordPos && node) {
        result.push(node)
      }
    }
    if (parent) {
      parent.children = [...result.reverse()];
    }
  }
}

export function getPreviewNode() {

}