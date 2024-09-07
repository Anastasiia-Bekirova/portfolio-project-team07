// import Swiper from 'swiper';
// import { Navigation, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// // document.addEventListener('DOMContentLoaded', () => {
// //   const swiper = new Swiper('.project-swiper', {
// //     modules: [Navigation, Keyboard],
// //     navigation: {
// //       nextEl: '.swiper-btn-next',
// //       prevEl: '.swiper-btn-prev',
// //     },
// //     keyboard: {
// //       enabled: true,
// //     },
// //   });
// // });

const swiper = new Swiper('.project-swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

console.log('jeiwj');
