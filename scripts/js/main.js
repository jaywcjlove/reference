/** ==========dark theme============== */
const LOCAL_NANE = '_dark_mode_theme_'
const rememberedValue = localStorage.getItem(LOCAL_NANE);
if (rememberedValue && ['light', 'dark'].includes(rememberedValue)) {
  document.documentElement.setAttribute('data-color-mode', rememberedValue);
}
const button = document.querySelector('#darkMode');
button.onclick = () => {
  const theme = document.documentElement.dataset.colorMode;
  const mode = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-mode', mode);
  localStorage.setItem(LOCAL_NANE, mode);
}
/** ==========anchor============== */
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
  const anchor = element || document.querySelector(`a.tocs-link[href='${decodeURIComponent(window.location.hash)}']`);
  if (anchor) {
    anchor.classList.add('is-active-link');
  }
}
// toc 定位
updateAnchor()
const anchorAll = document.querySelectorAll('.menu-tocs .menu-modal a.tocs-link');
anchorAll.forEach((item) => {
  item.addEventListener('click', (e) => {
    updateAnchor()
  })
})

/** ==========search============== */
const fuse = new Fuse(REFS_DATA, {
  includeScore: !1,
  shouldSort: !0,
  includeMatches: !0,
  matchEmptyQuery: !0,
  threshold: .1,
  keys: [
    { name: "title", weight: 12 }, 
    { name: 'intro', weight: 2 }, 
    { name: 'sections.t', weight: 5 }
  ],
});

const searchBtn = document.getElementById('searchbtn');
const searchBox = document.getElementById('mysearch');
const searchInput = document.getElementById('mysearch-input');
const closeBtn = document.getElementById('mysearch-close');
const searchMenu = document.getElementById('mysearch-menu');
const searchContent = document.getElementById('mysearch-content');
const isHome = document.body.classList.contains('home');

searchBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  showSearch();
});

closeBtn.addEventListener('click', hideSearch);
searchBox.addEventListener('click', hideSearch);
searchBox.firstChild.addEventListener('click', (ev) => ev.stopPropagation());
searchInput.addEventListener('input', (evn) => searchResult(evn.target.value));
document.addEventListener('keydown', (ev) => {
  if (ev.metaKey && ev.key.toLocaleLowerCase() === 'k') {
    searchBox.classList.contains('show') ? hideSearch() : showSearch();
  }
});

function showSearch() {
  document.body.classList.add('search');
  searchBox.classList.add('show');
  searchInput.focus();
}

function hideSearch() {
  document.body.classList.remove('search');
  searchBox.classList.remove('show');
}
let result = []
let inputValue = '';

function searchResult(value) {
  inputValue = value;
  result = fuse.search(value);
  let menuHTML = '';
  result.forEach((item, idx) => {
    const label = item.item.title.replace(new RegExp(value, 'ig'), (txt) => {
      return `<mark>${txt}</mark>`
    })
    const href = isHome ? item.item.path : item.item.path.replace('docs/', '');
    if (idx === 0) {
      menuHTML += `<a href="${href}" class="active">${label}</a>`;
    } else {
      menuHTML += `<a href="${href}">${label}</a>`;
    }
  });
  searchMenu.innerHTML = menuHTML;
  searchSectionsResult();
  const data = Array.from(searchMenu.children)
  data.forEach((anchor, idx) => {
    anchor.onmouseenter = (evn) => {
      data.forEach(item => item.classList.remove('active'));
      evn.target.classList.add('active');
      searchSectionsResult(idx);
    }
  });
  const anchorData = searchContent.querySelectorAll('a');
  Array.from(anchorData).forEach((item) => {
    item.addEventListener('click', hideSearch);
  })
}

function searchSectionsResult(idx = 0) {
  const data = result[idx] || [];
  const title = (data.item?.intro || '').replace(new RegExp(inputValue, 'ig'), (txt) => {
    return `<mark>${txt}</mark>`
  });
  let sectionHTML = `<h3>${title}</h3><ol>`;
  if (data && data.item && data.item.sections) {
    data.item.sections.forEach((item, idx) => {
      const label = item.t.replace(new RegExp(inputValue, 'ig'), (txt) => {
        return `<mark>${txt}</mark>`
      })
      const href = isHome ? data.item.path : data.item.path.replace('docs/', '');
      if (item.l < 3) {
        sectionHTML += `<li><a href="${href + item.a}">${label}</a><div>`
      } else {
        sectionHTML += `<a href="${href + item.a}">${label}</a>`
      }
      if (data.item.sections.length === idx + 1) {
        sectionHTML += `</div></li>`
      }
    })
  }
  searchContent.innerHTML = sectionHTML;
}