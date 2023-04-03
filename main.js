import { Navigation, Pagination } from "swiper";
import anime from "animejs/lib/anime.es.js";
import Swiper from "swiper/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("aboba");
  anime({
    targets: ".promo__text-wrapper",
    opacity: 1,
    easing: "linear",
    duration: 1500,
  });
});

(function start() {
  const menu = document.querySelector(".nav");
  const burgerBtn = document.querySelector(".burger__menu");
  const messageForm = document.querySelector(".message__form");

  const sliderContainer = document.querySelector(".swiper");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let animatedElement = entry.target;
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

  anime({
    targets: ".logo",
    opacity: [0, 1],
    duration: 1000,
    easing: "linear",
  });

  // anime({
  //   targets: ".promo__title",
  //   opacity: [0, 1],
  //   scale: [0.5, 1],
  //   // rotate: "1turn",
  //   easing: "easeInQuad",
  //   duration: 1500,
  // });

  anime({
    targets: ".promo__title-wrapper",
    translateX: "100%",
    opacity: 1,
    easing: "easeOutExpo",
    // duration: 2000,
    // delay: 1000,
  });

  const sendForm = (e) => {
    e.preventDefault();
  };

  messageForm.addEventListener("submit", sendForm);

  let isOpen = false;

  const handleMenu = () => {
    burgerBtn.classList.toggle("active");
    menu.classList.toggle("open");
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  burgerBtn.addEventListener("click", handleMenu);

  const desktopSwiper = new Swiper(".swiper-container", {
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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("open");
      burgerBtn.classList.remove("active");
    }
  });
})();
