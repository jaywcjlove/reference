const LOCAL_NANE = '_dark_mode_theme_';
const rememberedValue = localStorage.getItem(LOCAL_NANE);

if (rememberedValue && ['light', 'dark'].includes(rememberedValue)) {
  document.documentElement.setAttribute('data-color-mode', rememberedValue);
  const iframe = document.querySelector('.giscus-frame');
  if (iframe) {
    const config = {
      setConfig: {
        theme: rememberedValue.toLocaleLowerCase(),
      },
    };
    iframe.contentWindow.postMessage({ giscus: config }, 'https://giscus.app');
  }
}
const button = document.querySelector('#darkMode');
button.onclick = () => {
  const theme = document.documentElement.dataset.colorMode;
  const mode = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-mode', mode);
  localStorage.setItem(LOCAL_NANE, mode);
  const iframe = document.querySelector('.giscus-frame');
  if (iframe) {
    const config = {
      setConfig: { theme: mode },
    };
    iframe.contentWindow.postMessage({ giscus: config }, 'https://giscus.app');
  }
};
