import formatter from '@uiw/formatter';

export function footer(options = {}) {
  let footerText = '© 2022 Kenny Wang.';
  if (options.isHome) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const cst = new Date(utc + 3600000 * 8);
    footerText += ` Updated on ${formatter('YYYY/MM/DD HH:mm:ss', cst)}`;
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
