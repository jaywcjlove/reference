/** ==========anchor============== */
if ('onhashchange' in window && (typeof document.documentMode === 'undefined' || document.documentMode == 8)) {
  window.onhashchange = function () {
    anchorPoint();
    updateAnchor();
  };
}
function anchorPoint() {
  const hash = window.location.hash?.replace(/^#/, '') || '';
  const elm = document.getElementById(decodeURIComponent(hash));
  Array.from(document.querySelectorAll('.h2wrap-body .wrap')).forEach((elm) => elm.classList.remove('active'));
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
updateAnchor();
const anchorAll = document.querySelectorAll('.menu-tocs .menu-modal a.tocs-link');
anchorAll.forEach((item) => {
  item.addEventListener('click', (e) => {
    updateAnchor();
  });
});

/** ==========search============== */
const fuse = new Fuse(REFS_DATA, {
  includeScore: !1,
  shouldSort: !0,
  includeMatches: !0,
  matchEmptyQuery: !0,
  threshold: 0.1,
  keys: [
    { name: 'name', weight: 20 },
    { name: 'intro', weight: 2 },
    { name: 'tags', weight: 2 },
    { name: 'sections.t', weight: 5 },
  ],
});

const searchBtn = document.getElementById('searchbtn');
const searchBox = document.getElementById('mysearch');
const searchInput = document.getElementById('mysearch-input');
const closeBtn = document.getElementById('mysearch-close');
const searchMenu = document.getElementById('mysearch-menu');
const searchContent = document.getElementById('mysearch-content');
const isHome = document.body.classList.contains('home');
function getDocUrl(url = '') {
  return isHome ? url : url.replace('docs/', '');
}
searchBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  showSearch();
});

closeBtn.addEventListener('click', hideSearch);
searchBox.addEventListener('click', hideSearch);
searchBox.firstChild.addEventListener('click', (ev) => ev.stopPropagation());
searchInput.addEventListener('input', (evn) => searchResult(evn.target.value));

let activeMenu = {};
let result = [];
let inputValue = '';
let activeIndex = 0;

document.addEventListener('keydown', (ev) => {
  const key = ev.key.toLocaleLowerCase();
  if (key === 'escape') {
    hideSearch();
  }
  if ((ev.metaKey || ev.ctrlKey) && key === 'k') {
    ev.preventDefault();
    searchBox.classList.contains('show') ? hideSearch() : showSearch();
  }
  if (key === 'enter') {
    const url = activeMenu.path || activeMenu?.item.path;
    window.location.href = getDocUrl(url);
  }
  if (key === 'arrowdown') {
    activeAnchorElm('down');
  }
  if (key === 'arrowup') {
    activeAnchorElm('up');
  }
});

function activeAnchorElm(type) {
  if (type === 'down') {
    ++activeIndex;
  }
  if (type === 'up') {
    --activeIndex;
  }
  const data = Array.from(searchMenu.children);
  if (activeIndex < 0) activeIndex = 0;
  if (activeIndex >= data.length) activeIndex = data.length - 1;
  anchorElm = data[activeIndex];
  if (anchorElm) {
    data.forEach((item) => item.classList.remove('active'));
    anchorElm.classList.add('active');
    activeMenu = result[activeIndex];
    activeIndex = activeIndex;
    searchSectionsResult(activeIndex);
  }
}

function showSearch() {
  document.body.classList.add('search');
  searchBox.classList.add('show');
  searchResult(searchInput.value || '');
  searchInput.focus();
}

function hideSearch() {
  document.body.classList.remove('search');
  searchBox.classList.remove('show');
}
function getValueReg(val = '') {
  return new RegExp(val.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'), 'ig');
}

function searchResult(value) {
  inputValue = value;
  result = fuse.search(value);
  if (!value) {
    result = REFS_DATA.map((item) => ({ item: item }));
  }
  let menuHTML = '';
  result.forEach((item, idx) => {
    const label = (item.item.name || '').replace(getValueReg(value), (txt) => {
      return `<mark>${txt}</mark>`;
    });
    const tags = (item.item.tags || []).join(',').replace(getValueReg(value), (txt) => {
      return `<mark>${txt}</mark>`;
    });
    const href = isHome ? item.item.path : item.item.path.replace('docs/', '');
    if (idx === 0) {
      activeIndex = idx;
      activeMenu = item.item;
      menuHTML += `<a href="${href}" class="active"><span>${label}</span><sup>${tags}</sup></a>`;
    } else {
      menuHTML += `<a href="${href}"><span>${label}</span><sup>${tags}</sup></a>`;
    }
  });
  searchMenu.innerHTML = menuHTML;
  searchSectionsResult();
  const data = Array.from(searchMenu.children);
  data.forEach((anchor, idx) => {
    anchor.onmouseenter = (evn) => {
      data.forEach((item) => item.classList.remove('active'));
      evn.target.classList.add('active');
      activeMenu = result[idx];
      activeIndex = idx;
      searchSectionsResult(idx);
    };
  });
  const anchorData = searchContent.querySelectorAll('a');
  Array.from(anchorData).forEach((item) => {
    item.addEventListener('click', hideSearch);
  });
}
function searchSectionsResult(idx = 0) {
  const data = result[idx] || [];
  const title = (data.item?.intro || '').replace(getValueReg(inputValue), (txt) => `<mark>${txt}</mark>`);
  let sectionHTML = `<h3>${title}</h3><ol>`;
  if (data && data.item && data.item.sections) {
    data.item.sections.forEach((item, idx) => {
      const label = item.t.replace(getValueReg(inputValue), (txt) => `<mark>${txt}</mark>`);
      const href = getDocUrl(data.item.path);
      if (item.l < 3) {
        sectionHTML += `<li><a href="${href + item.a}">${label}</a><div>`;
      } else {
        sectionHTML += `<a href="${href + item.a}">${label}</a>`;
      }
      if (data.item.sections.length === idx + 1) {
        sectionHTML += `</div></li>`;
      }
    });
  }
  searchContent.innerHTML = sectionHTML;
}
