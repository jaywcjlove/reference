import path from 'path';
import { getSVGNode } from '../utils/getSVGNode.mjs';

const ICONS_SEARCH_PATH = path.resolve(process.cwd(), 'scripts/assets/search.svg');

export function search({ homePath = '', isHome } = {}) {
  const relativePath = homePath.replace(/\/?index.html$/, isHome ? '' : '/');
  const fuseJSUrl = relativePath + 'js/fuse.min.js';
  const manJSUrl = relativePath + 'js/main.js';
  const dataJSUrl = relativePath + 'data.js';
  const svgSearchNode = getSVGNode(ICONS_SEARCH_PATH);
  return [
    {
      type: 'element',
      tagName: 'script',
      properties: {
        src: dataJSUrl,
        defer: true,
      },
    },
    {
      type: 'element',
      tagName: 'script',
      properties: {
        src: fuseJSUrl,
        defer: true,
      },
    },
    {
      type: 'element',
      tagName: 'script',
      properties: {
        src: manJSUrl,
        defer: true,
      },
    },
    {
      type: 'element',
      tagName: 'div',
      properties: {
        id: 'mysearch',
      },
      children: [
        {
          type: 'element',
          tagName: 'div',
          properties: {
            class: ['mysearch-box'],
          },
          children: [
            {
              type: 'element',
              tagName: 'div',
              properties: { class: ['mysearch-input'] },
              children: [
                {
                  type: 'element',
                  tagName: 'div',
                  properties: {},
                  children: [
                    ...svgSearchNode,
                    {
                      type: 'element',
                      tagName: 'input',
                      properties: {
                        id: ['mysearch-input'],
                        type: 'search',
                        placeholder: '搜索备忘清单',
                        autocomplete: 'off',
                      },
                      children: [],
                    },
                    {
                      type: 'element',
                      tagName: 'div',
                      properties: { class: ['mysearch-clear'] },
                    },
                  ],
                },
                {
                  type: 'element',
                  tagName: 'button',
                  properties: { id: ['mysearch-close'], type: 'button' },
                  children: [{ type: 'text', value: '取消' }],
                },
              ],
            },
            {
              type: 'element',
              tagName: 'div',
              properties: { class: ['mysearch-result'] },
              children: [
                {
                  type: 'element',
                  tagName: 'div',
                  properties: { id: 'mysearch-menu' },
                  children: [],
                },
                {
                  type: 'element',
                  tagName: 'div',
                  properties: { id: 'mysearch-content' },
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
