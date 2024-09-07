import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.project-swiper-container', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1, // Показывать только один слайд за раз
  spaceBetween: 0, // Убедитесь, что между слайдами нет отступов
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});
