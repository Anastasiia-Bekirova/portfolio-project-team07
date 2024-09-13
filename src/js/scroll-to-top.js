const backToTopBtn = document.querySelector('.backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 900) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
