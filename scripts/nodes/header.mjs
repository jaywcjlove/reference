import { logo, github, editor } from './logo.mjs';

export function header({ homePath, githubURL = '' }) {
  const data = [
    {
      href: githubURL,
      target: '__blank',
      label: '编辑',
      children: [editor]
    },
    {
      href: 'https://github.com/jaywcjlove/reference',
      target: '__blank',
      children: [github]
    }
  ]
  return {
    type: 'element',
    tagName: 'nav',
    properties: {
      class: 'header-nav',
    },
    children: [
      {
        type: 'element',
        tagName: 'div',
        properties: {
          class: ['max-container'],
        },
        children: [
          {
            type: 'element',
            tagName: 'a',
            properties: {
              href: homePath,
              class: ['logo'],
            },
            children: logo,
          },
          {
            type: 'element',
            tagName: 'div',
            properties: {
              class: ['menu'],
            },
            children: data.map(({ href, label, children = [], ...props }) => {
              const childs = {
                type: 'element',
                tagName: 'a',
                properties: { href, class: [], ...props },
                children: [
                  ...children,
                  {
                    type: 'element',
                    tagName: 'span',
                    properties: {},
                    children: label ? [
                      { type: 'text', value: label }
                    ] : []
                  }
                ]
              }
              if (label) {
                childs.children = [...children, {
                  type: 'element',
                  tagName: 'span',
                  properties: {},
                  children: [
                    { type: 'text', value: label }
                  ]
                }];
              } else {
                childs.children = children;
              }
              return childs
            }),
          },
        ],
      }
    ],
  };
}