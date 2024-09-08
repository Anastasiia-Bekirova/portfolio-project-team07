import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

//* ACCORDION *//

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.about-me-acc', {
    duration: 300,
    showMultiple: false,
    collapse: true,
    elementClass: 'about-me-acc-el',
    triggerClass: 'about-me-acc-el-trigger',
    panelClass: 'about-me-acc-el-descr-frame',
    activeClass: 'active',
    openOnInit: [0],
  });

  const adjustMargins = () => {
    const activeElement = document.querySelector('.about-me-acc-el.active');
    const accordionElements = document.querySelectorAll('.about-me-acc-el');

    accordionElements.forEach(el => {
      const arrowDown = el.querySelector('.arr-down');
      const arrowUp = el.querySelector('.arr-up');

      if (el !== activeElement) {
        el.style.marginBottom = '0';
        arrowDown.classList.remove('is-hidden');
        arrowUp.classList.add('is-hidden');
      }
    });

    if (activeElement) {
      const activePanel = activeElement.querySelector(
        '.about-me-acc-el-descr-frame'
      );
      const activeArrowDown = activeElement.querySelector('.arr-down');
      const activeArrowUp = activeElement.querySelector('.arr-up');

      activePanel.style.paddingBottom = `${activePanel.scrollHeight}px`;
      activeArrowDown.classList.add('is-hidden');
      activeArrowUp.classList.remove('is-hidden');
    }
  };

  document.querySelectorAll('.about-me-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', adjustMargins);
  });
});

//* SWIPER *//

// document.addEventListener('DOMContentLoaded', () => {
//   // const swiperContainer = document.querySelector('.about-me-swiper');
//   const nextButton = document.querySelector('.about-me-swiper-btn-next');
//   const prevButton = document.querySelector('.about-me-swiper-btn-prev');
//   // console.log(swiperContainer)
//   // if (swiperContainer && nextButton && prevButton) {
//   //   try {
//   const swiper = new Swiper('.about-me-swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     navigation: {
//       nextEl: '.about-me-swiper-btn-next',
//       prevEl: '.about-me-swiper-btn-prev',
//     },
//   });
//   //   } catch (error) {
//   //     console.error('Error initializing Swiper:', error);
//   //   }
//   // } else {
//   //   console.error('Swiper container or navigation buttons not found');
//   // }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const nextButton = document.querySelector('.about-me-swiper-btn-next');
//   const prevButton = document.querySelector('.about-me-swiper-btn-prev');
//   const swiper = new Swiper('.about-me-swiper', {
//     modules: [Navigation, Keyboard, Mousewheel],
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     navigation: {
//       nextEl: '.about-me-swiper-btn-next',
//       prevEl: '.about-me-swiper-btn-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     mousewheel: true,

//     on: {
//       reachBeginning: function () {
//         document
//           .querySelector('.custom-prev')
//           .classList.add('swiper-button-disabled');
//       },
//       reachEnd: function () {
//         document
//           .querySelector('.custom-next')
//           .classList.add('swiper-button-disabled');
//       },
//       fromEdge: function () {
//         document
//           .querySelector('.custom-prev')
//           .classList.remove('swiper-button-disabled');
//         document
//           .querySelector('.custom-next')
//           .classList.remove('swiper-button-disabled');
//       },
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.querySelector('.about-me-swiper-btn-next');
  const prevButton = document.querySelector('.about-me-swiper-btn-prev');
  const swiperContainer = document.querySelector('.about-me-swiper');
  const chosenSkill = document.querySelector('.about-me-swiper-slide-el-text');

  const swiper = new Swiper(swiperContainer, {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: true,
  });

  function updateCirclePosition() {
    const activeIndex = swiper.activeIndex;
    const offsetX = activeIndex * 100;

    chosenSkill.style.transform = `translateX(${offsetX}px, -50%)`;
  }

  swiper.on('slideChange', updateCirclePosition);

  updateCirclePosition();
});
