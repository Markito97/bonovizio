import Swiper from "swiper/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import anime from "animejs/lib/anime.es.js";
import { Navigation, Pagination } from "swiper";

export const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  modules: [Navigation, Pagination],
});

export const sliderAnimation = () => {
  const sliderContainer = document.querySelector(".swiper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animatedElement = entry.target;
        anime({
          targets: animatedElement,
          opacity: 1,
          translateY: [100, 0],
          easing: "linear",
          duration: 1500,
        });
        observer.unobserve(animatedElement);
      }
    });
  });

  observer.observe(sliderContainer);
};

export const paginationBulletsAnimation = () => {
  anime({
    targets: ".swiper-custom-pagination .swiper-pagination-bullet",
    translateY: [1500, 0],
    delay: anime.stagger(100, { start: 1500 }),
  });
};
