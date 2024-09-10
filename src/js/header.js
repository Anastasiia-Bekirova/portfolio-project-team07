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
backdropMenu.addEventListener('click', closeBtnClick);
document.body.addEventListener('click', event => {
  if (
    !menuList.classList.contains('visually-hidden') &&
    !event.target.classList.contains('navigation-menu-btn')
  ) {
    menuBtnClick();
  }
});
const menuOpenKeyframes = new KeyframeEffect(
  menuList,
  [{ opacity: '0' }, { opacity: '1' }],
  { duration: 1000 }
);

const menuCloseKeyframes = new KeyframeEffect(
  menuList,
  [{ opacity: '1' }, { opacity: '0' }],
  { duration: 500 }
);
const menuOpenAnimation = new Animation(menuOpenKeyframes, document.timeline);

const menuCloseAnimation = new Animation(menuCloseKeyframes, document.timeline);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menuList.classList.contains('is-open')) {
    closeBtnClick();
  }
});

function menuBtnClick() {
  if (menuList.classList.contains('visually-hidden')) {
    menuOpenAnimation.play();
    menuList.classList.remove('visually-hidden');
    return;
  }
  menuCloseAnimation.play();
  setTimeout(() => {
    menuList.classList.add('visually-hidden');
  }, 500);
}

function burgerBtnClick() {
  backdropMenu.classList.add('is-open');
  backdropMenu.classList.remove('is-closed');
  document.body.style.overflow = 'hidden';
}

function closeBtnClick() {
  backdropMenu.classList.remove('is-open');
  backdropMenu.classList.add('is-closed');
  document.body.style.overflow = '';
}
