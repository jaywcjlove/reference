
export function footer() {
  return {
    type: 'element',
    tagName: 'footer',
    properties: {
      class: 'footer-warp',
    },
    children: [
      {
        type: 'element',
        tagName: 'footer',
        properties: {
          class: ['max-container'],
        },
        children: [
          { type: 'text', value: '© 2022 Kenny Wang, All rights reserved.' }
        ],
      }
    ],
  };
}
