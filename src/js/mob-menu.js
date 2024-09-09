const burgerBtnEL = document.querySelector('.burger-btn');
const menuEl = document.querySelector('.mob-menu');
const closeLinksEl = document.querySelectorAll('.mob-link-js');


const onCloseBtnOrLinkClick = () => {
	menuEl.classList.remove('mob-menu-is-open');

	closeLinksEl.forEach(link => {
		link.removeEventListener('click', onCloseBtnOrLinkClick);
	})
}

const onBurgerBtnClick = () => {
	menuEl.classList.add('mob-menu-is-open');

	closeLinksEl.forEach(link => {
		link.addEventListener('click', onCloseBtnOrLinkClick);
	})
}

burgerBtnEL.addEventListener('click', onBurgerBtnClick);
