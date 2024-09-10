import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  
  //* ACCORDION *//
  
  const accordion = new Accordion('.about-me-acc', {
    duration: 500,
    showMultiple: true,
    collapse: true,
    elementClass: 'about-me-acc-el',
    triggerClass: 'about-me-acc-el-trigger',
    panelClass: 'about-me-acc-el-descr-frame',
    openOnInit: [0],
  });

  document.querySelectorAll('.about-me-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const parentElement = trigger.closest('.about-me-acc-el');
      const arrowDown = parentElement.querySelector('.arr-down');
      const arrowUp = parentElement.querySelector('.arr-up');
      
      if (arrowDown && arrowUp) {
        if (arrowDown.classList.contains('is-hidden')) {
          arrowDown.classList.remove('is-hidden');
          arrowUp.classList.add('is-hidden');
        } else {
          arrowDown.classList.add('is-hidden');
          arrowUp.classList.remove('is-hidden');
        }
      }
    });
  });

  //* SWIPER *//

  const swiper = new Swiper('.about-me-swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.about-me-swiper-btn-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        width: 260,
      },
      768: {
        slidesPerView: 3,
        width: 600,
      },
      1440: {
        slidesPerView: 6,
        width: 1200,
      },
    },
  });
});