const scripts = `
if(('onhashchange' in window) && ((typeof document.documentMode==='undefined') || document.documentMode==8)) {
  window.onhashchange = function () {
    anchorPoint()
    updateAnchor()
  };
}
function anchorPoint() {
  const hash = window.location.hash?.replace(/^#/, '') || '';
  const elm = document.getElementById(decodeURIComponent(hash));
  Array.from(document.querySelectorAll('.h2wrap-body .wrap')).forEach((elm) => elm.classList.remove('active'))
  if (elm?.tagName === 'H3') {
    elm?.parentElement?.parentElement?.classList.add('active');
  }
}
anchorPoint();

function updateAnchor(element) {
  const anchorContainer = document.querySelectorAll('.menu-tocs .menu-modal a.tocs-link');
  anchorContainer.forEach((tocanchor) => {
    tocanchor.classList.remove('is-active-link');
  });
  const anchor = element || document.querySelector(\`a.tocs-link[href='\${decodeURIComponent(window.location.hash)}']\`);
  if (anchor) {
    anchor.classList.add('is-active-link');
  }
}
// toc 定位
updateAnchor()
const anchor = document.querySelectorAll('.menu-tocs .menu-modal a.tocs-link');
anchor.forEach((item) => {
  item.addEventListener('click', (e) => {
    updateAnchor()
  })
})
`;

export function anchorPoint() {
  return {
    type: 'element',
    tagName: 'script',
    children: [
      {
        type: 'text',
        value: scripts,
      },
    ],
  };
}
