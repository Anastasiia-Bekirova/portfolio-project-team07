import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.project-swiper-container', {
  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});

// comments
