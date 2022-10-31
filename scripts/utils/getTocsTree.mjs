import path from 'path';
import { getCodeString } from 'rehype-rewrite';
import { panelAddNumber } from './panelAddNumber.mjs';
import { getChilds, getHeader } from './childs.mjs';
import { ICONS_PATH, getSVGNode } from './getSVGNode.mjs';

export const titleNum = (tagName = '') => Number(tagName.replace(/^h/, ''));

export function getTocsTitleNode(arr = [], result = []) {
  arr.forEach(({ tagName, type, properties, children }) => {
    if (/^h[23456]/.test(tagName)) {
      const num = titleNum(tagName);
      const props = { 'aria-hidden': 'true', class: `leve${num} tocs-link`, href: '#' + (properties.id || '') };
      const title = getCodeString(children || []);
      result.push({ tagName: 'a', type, properties: props, children: [{ type: 'text', value: title || ' ' }] });
    } else if (children?.length > 0) {
      result = result.concat(getTocsTitleNode(children));
    }
  });
  return result;
}

export function addTocsInWarp(tocsData = [], menuData, isDone = false) {
  const childs = tocsData.map((item) => {
    if (item.properties?.class?.includes('h1wrap-body')) {
      isDone = true;
    }
    if (!isDone && item.children) {
      item.children = addTocsInWarp([...item.children], menuData, isDone);
    }
    return item;
  });
  if (isDone) {
    childs.splice(1, 0, menuData);
  }
  return childs;
}

export const getTocsTitleNodeWarpper = (children = []) => {
  const iconPath = path.resolve(ICONS_PATH, `menu.svg`);
  const svgNode = getSVGNode(iconPath);
  return {
    type: 'element',
    tagName: 'div',
    properties: {
      class: 'menu-tocs',
    },
    children: [
      {
        type: 'element',
        tagName: 'div',
        properties: {
          class: 'menu-btn',
        },
        children: [...svgNode],
      },
      {
        type: 'element',
        tagName: 'div',
        properties: {
          class: 'menu-modal',
        },
        children: children,
      },
    ],
  };
};

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
    if (toc.number === level && titleNum(toc.tagName) === level) {
      const header = getHeader(data.slice(n), level);
      const childs = getChilds([...data.slice(n + 1)], level);
      const resultChilds = getTocsTree(childs);
      const wrapCls = ['wrap'];
      const headerCls = ['wrap-header', `h${level}wrap`];
      wrapCls.push(`h${level}body-${resultChilds.length === 0 ? 'not-' : ''}exist`);

      if (level === 1) wrapCls.push('max-container');
      const wrapStyle = toc.properties['wrap-style'];
      delete toc.properties['wrap-style'];
      const wrapClass = toc.properties['wrap-class'];
      if (wrapClass) wrapCls.push(wrapClass);
      delete toc.properties['wrap-class'];
      let panle = {
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
                children: [...header],
              },
            ],
          },
        ],
      };
      if (titleNum(toc.tagName) > 3) {
        panle = [toc, ...header];
      }
      if (resultChilds.length > 0) {
        const bodyStyle = toc.properties['body-style'];
        delete toc.properties['body-style'];
        const bodyClass = toc.properties['body-class'];
        delete toc.properties['body-class'];
        if (Array.isArray(panle)) {
          panle = panle.concat(resultChilds);
        } else if (panle.children) {
          panle.children = panle.children.concat({
            type: 'element',
            tagName: 'div',
            properties: { class: [`h${level}wrap-body`, bodyClass], style: bodyStyle },
            children: [...resultChilds],
          });
        }
      }
      if (Array.isArray(panle)) {
        result = result.concat(panle);
      } else {
        result.push(panle);
      }
    }

    n++;
  }
  return result;
}
