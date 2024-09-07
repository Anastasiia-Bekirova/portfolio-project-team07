const PICTURES_CONTAINER = document.querySelectorAll(
  '.coversPicturesContainer'
);
const MAIN_CONTAINER = document.querySelector('.coversMainContainer');
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      coversShowAnimation();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

function coversShowAnimation() {
  toggleAnimationClass(ifCoversInViewport(MAIN_CONTAINER));
}

function toggleAnimationClass(isInView) {
  PICTURES_CONTAINER.forEach(elem => {
    elem.classList.toggle('slideOn', isInView);
  });
}

function ifCoversInViewport(elem) {
  const position = elem.getBoundingClientRect();
  return (
    position.bottom > 0 &&
    position.right > 0 &&
    position.top <
      (window.innerHeight || document.documentElement.clientHeight) &&
    position.left < (window.innerWidth || document.documentElement.clientWidth)
  );
}
