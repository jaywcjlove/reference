
const scripts = `
if(('onhashchange' in window) && ((typeof document.documentMode==='undefined') || document.documentMode==8)) {
  window.onhashchange = function () {
    anchorPoint()
  };
}
function anchorPoint() {
  const hash = window.location.hash?.replace(/^#/, '') || '';
  const elm = document.getElementById(decodeURIComponent(hash));
  Array.from(document.querySelectorAll('.h2wrap-body .wrap')).forEach((elm) => elm.classList.remove('active'))
  if (elm?.tagName === 'H3') {
    elm?.parentElement?.parentElement?.classList.add('active');
    const box = elm?.parentElement?.parentElement;
    console.log('elm:2', box, document.querySelectorAll('.h2wrap-body .wrap'))
  }
}
anchorPoint();
`;

export function anchorPoint() {
  return {
    type: 'element',
    tagName: 'script',
    children: [{
      type: 'text',
      value: scripts,
    }]
  }
}