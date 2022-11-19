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