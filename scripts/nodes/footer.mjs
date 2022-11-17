import formatter from '@uiw/formatter';

export function footer(options = {}) {
  let footerText = '© 2022 Kenny Wang.';
  if (options.isHome) {
    footerText += ` Updated on ${formatter('YYYY/MM/DD HH:mm:ss', new Date())}`;
  }
  return {
    type: 'element',
    tagName: 'footer',
    properties: {
      class: 'footer-wrap',
    },
    children: [
      {
        type: 'element',
        tagName: 'footer',
        properties: {
          class: ['max-container'],
        },
        children: [{ type: 'text', value: footerText }],
      },
    ],
  };
}
