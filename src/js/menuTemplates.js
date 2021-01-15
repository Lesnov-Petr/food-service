import menuTemplates from '../templates/food.hbs';
import listMenu from '../food.json';

const food = menuTemplates(listMenu);
const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('beforeend', food);
