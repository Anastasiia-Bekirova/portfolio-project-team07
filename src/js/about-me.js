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

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.querySelector('.about-me-swiper-btn-next');
  const prevButton = document.querySelector('.about-me-swiper-btn-prev');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    // loopedSlides: 4,
    navigation: {
      nextEl: '.about-me-swiper-btn-next',
      prevEl: prevButton,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel: true,
    on: {
      slideChange: function () {
        document
          .querySelectorAll('.color-overlay')
          .forEach(overlay => {
            overlay.style.transform = 'scale(0)';
          });

        const activeOverlay = document.querySelector(
          '.swiper-slide-active .color-overlay'
        );
        if (activeOverlay) {
          activeOverlay.style.transform = 'scale(1)';
        }
      },
    },
  });
  window.addEventListener('load', () => {
    const initialActiveOverlay = document.querySelector('.swiper-slide-active .color-overlay');
    if (initialActiveOverlay) {
      initialActiveOverlay.style.transform = 'scale(1)';
    }
  });
});
