const menuBtn = document.querySelector('.navigation-menu-btn');
const menuList = document.querySelector('.menu-list');
const burgerBtn = document.querySelector('.burger-btn');
const backdropMenu = document.querySelector('.backdrop-menu');
const closeBtn = document.querySelector('.close-btn');
const orderBtn = document.querySelector('.backdrop-order-btn-link');
const burgerMenuList = document.querySelector('.backdrop-menu-list');

menuBtn.addEventListener('click', menuBtnClick);
burgerBtn.addEventListener('click', burgerBtnClick);
closeBtn.addEventListener('click', closeBtnClick);
menuList.addEventListener('click', menuBtnClick);
orderBtn.addEventListener('click', closeBtnClick);
burgerMenuList.addEventListener('click', closeBtnClick);

document.body.addEventListener('click', event => {
  if (
    !menuList.classList.contains('visually-hidden') &&
    !event.target.classList.contains('navigation-menu-btn')
  ) {
    menuBtnClick();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menuList.classList.contains('is-open')) {
    closeBtnClick();
  }
});

function menuBtnClick() {
  if (menuList.classList.contains('visually-hidden')) {
    menuList.classList.remove('visually-hidden');
    return;
  }
  setTimeout(() => {
    menuList.classList.add('visually-hidden');
  }, 500);
}

function burgerBtnClick() {
  backdropMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeBtnClick() {
  setTimeout(() => {
    backdropMenu.classList.remove('is-open');
  }, 500);
  document.body.style.overflow = '';
}
