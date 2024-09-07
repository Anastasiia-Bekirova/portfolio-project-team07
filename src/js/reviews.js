
import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
    const reviewsList = document.getElementById('reviews-list');
    const errorMessage = document.getElementById('error-message');
    const showError = (message) => {
        iziToast.error({
            title: 'Error',
            message: message || "Not found",
            position: 'topRight',
        });
    };

    axios.get('https://portfolio-js.b.goit.study/api/reviews')
        .then(response => {
            const reviews = response.data;

            if (reviews.length === 0) {
                throw new Error('Not found');
            }
            const reviewsHTML = reviews.map(review => `
        <li class="swiper-slide">
          <div class="review">
            <img src="${review.avatar_url}" alt="Avatar of ${review.author}" class="review-avatar"/>
            <h3 class="author-name">${review.author}</h3>
            <p class="author-review">${review.review}</p>
          </div>
        </li>
      `).join('');

            reviewsList.innerHTML = reviewsHTML;
            const swiper = new Swiper('.reviews-container', {
                modules: [Navigation, Keyboard, Mousewheel],
                slidesPerView: 1,
                spaceBetween: 16,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },

                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                },
                navigation: {
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
                mousewheel: true,

                on: {
                    reachBeginning: function () {
                        document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
                    },
                    reachEnd: function () {
                        document.querySelector('.custom-next').classList.add('swiper-button-disabled');
                    },
                    fromEdge: function () {
                        document.querySelector('.custom-prev').classList.remove('swiper-button-disabled');
                        document.querySelector('.custom-next').classList.remove('swiper-button-disabled');
                    }
                }
            });
        })
        .catch(error => {
            showError(error.message);
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
            }
            reviewsList.innerHTML = '';
        });
});

