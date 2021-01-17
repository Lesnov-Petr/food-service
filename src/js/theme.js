const refs = {
  isThemeWindow: document.querySelector('body'),
  isChangeTheme: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',

  updateTheme(addTheme, removeTheme) {
    refs.isThemeWindow.classList.add(addTheme);
    refs.isThemeWindow.classList.remove(removeTheme);
  },

  updateLocalStorage(key, value) {
    localStorage.setItem(key, value);
  },
};

const { LIGHT, DARK } = Theme;

let current = localStorage.getItem('Theme');

if (current !== DARK) {
  Theme.updateTheme(LIGHT, DARK);
} else {
  Theme.updateTheme(DARK, LIGHT);
  refs.isChangeTheme.checked = true;
}

refs.isChangeTheme.addEventListener('change', changeTheme);

function changeTheme() {
  if (!refs.isChangeTheme.checked) {
    Theme.updateTheme(LIGHT, DARK);
    Theme.updateLocalStorage('Theme', 'light-theme');
  } else {
    Theme.updateTheme(DARK, LIGHT);
    Theme.updateLocalStorage('Theme', 'dark-theme');
  }
}
