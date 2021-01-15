const refs = {
  isThemeWindow: document.querySelector('body'),
  isChangeTheme: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',

  getLinghtTheme() {
    refs.isThemeWindow.classList.add(this.LIGHT);
    refs.isThemeWindow.classList.remove(this.DARK);
    localStorage.setItem('Theme', 'light-theme');
  },

  getDarkTheme() {
    refs.isThemeWindow.classList.add(this.DARK);
    refs.isThemeWindow.classList.remove(this.LIGHT);
    localStorage.setItem('Theme', 'dark-theme');
    refs.isChangeTheme.checked = true;
  },
};

let current = localStorage.getItem('Theme');
current !== Theme.DARK ? Theme.getLinghtTheme() : Theme.getDarkTheme();
refs.isChangeTheme.addEventListener('change', changeTheme);

function changeTheme() {
  if (refs.isChangeTheme.checked === false) {
    Theme.getLinghtTheme();
  } else {
    Theme.getDarkTheme();
  }
}
