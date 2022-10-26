/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const close = document.getElementsByClassName('hamburger-container')[0];
const menu = document.getElementsByClassName('menu-list')[0];

function toggle() {
  close.classList.toggle('close');
  menu.classList.toggle('show');
}

const list = document.getElementsByClassName('list');
for (let i = 0; i < list.length; i += 1) {
  list[i].addEventListener('click', () => {
    close.classList.remove('close');
    menu.classList.remove('show');
  });
}
