import anime from "animejs/lib/anime.es.js";
import { swiper } from "./src/core/slider";

// const motionPath = anime.path(".motion-path .circle");

// anime({
//   targets: ".motion-path .circle",
//   translateX: motionPath("x"),
//   translateY: motionPath("y"),
//   rotate: motionPath("angle"),
//   easing: "linear",
//   duration: 2000,
//   loop: true,
// });

anime({
  targets: ".promo__chat .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});

anime({
  targets: ".circle",
  translateY: 200,
  // translateX: 250,
  direction: "alternate",
  loop: true,
  easing: "linear",
});

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.addEventListener("DOMContentLoaded", (e) => {
  anime({
    targets: ".promo__text-wrapper",
    opacity: 1,
    easing: "linear",
    duration: 1500,
  });

  anime({
    targets: ".logo",
    opacity: [0, 1],
    duration: 1000,
    easing: "linear",
  });

  anime({
    targets: ".promo__title-wrapper",
    translateX: "100%",
    opacity: 1,
    easing: "easeOutExpo",
  });
});

(function start() {
  const menu = document.querySelector(".menu");
  const burgerBtn = document.querySelector(".burger__menu");
  const messageForm = document.forms.message;
  const sliderContainer = document.querySelector(".swiper");

  const name = messageForm.elements.name;
  const email = messageForm.elements.email;
  const message__text = messageForm.elements.message__text;
  const sumbitBtn = document.querySelector(".message__submit");

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

  const validate = () => {
    if (EMAIL_PATTERN.test(email.value)) {
      email.style.outline = "none";
    } else {
      email.style.outline = "2px solid red";
    }
  };

  email.addEventListener("input", validate);

  const sendForm = (e) => {
    e.preventDefault();
    console.log();
    const formElements = [name, email, message__text];
    formElements.forEach((element) => {
      if (!element.value) {
        element.style.outline = "2px solid red";
      } else {
        element.style.outline = "none";
      }
    });
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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("open");
      burgerBtn.classList.remove("active");
    }
  });
})();
