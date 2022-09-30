import { panelAddNumber } from './panelAddNumber.mjs';
import { getChilds, getHeader } from './childs.mjs';

/** Markdown 文档转成树形结构 */
export function getTocsTree(arr = [], result = []) {
  const data = panelAddNumber(arr);
  
  let n = 0;
  let level = -1;

  while (n < data.length) {
    const toc = data[n];

    if (level === -1) {
      level = toc.number;
    }
    const titleNum = Number(toc.tagName?.replace(/^h/, ''));

    if (toc.number === level && titleNum === level) {
      const header = getHeader(data.slice(n), level);
      const wrapCls = ['wrap'];
      const headerCls = ['wrap-header', `h${level}wrap`];

      if (level === 1) wrapCls.push('max-container');
      const wrapStyle = toc.properties['wrap-style'];
      delete toc.properties['wrap-style']
      const wrapClass = toc.properties['wrap-class'];
      if (wrapClass) wrapCls.push(wrapClass);
      delete toc.properties['wrap-class'];
      const panle = {
        type: 'element',
        tagName: 'div',
        properties: { class: wrapCls, style: wrapStyle },
        children: [
          {
            type: 'element',
            tagName: level === 1 ? 'header' : 'div',
            properties: { class: headerCls },
            children: [
              toc,
              {
                type: 'element',
                tagName: 'div',
                properties: { class: 'wrap-body' },
                children: [
                  ...header
                ],
              }
            ],
          }
        ],
      }
      const childs = getChilds([...data.slice(n + 1)], level);
      const resultChilds = getTocsTree(childs);
      if (resultChilds.length > 0) {
        const bodyStyle = toc.properties['body-style'];
        delete toc.properties['body-style']
        const bodyClass = toc.properties['body-class'];
        delete toc.properties['body-class']
        panle.children = panle.children.concat({
          type: 'element',
          tagName: 'div',
          properties: { class: [`h${level}wrap-body`, bodyClass], style: bodyStyle },
          children: [...resultChilds]
        });
      }
      result.push(panle);
    }

    n++;
  }
  return result;
}
