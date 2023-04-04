import anime from "animejs/lib/anime.es.js";
import { sliderAnimation, paginationBulletsAnimation, swiper } from "./src/core/slider";
import { form } from "./src/core/form";
import { burger } from "./src/core/burger";
import { promoTextAnimation } from "./src/core/animations/promo-text";
import { chatSvgAnimation } from "./src/core/animations/chat-svg";

document.addEventListener("DOMContentLoaded", (e) => {
  (function startApp() {
    form();
    burger();
    sliderAnimation();
    promoTextAnimation();
    chatSvgAnimation();
    paginationBulletsAnimation();
    anime({
      targets: ".menu",
      translateY: [-100, 0],
      delay: 500,
    });
    anime({
      targets: ".promo__preview-wrapper",
      translateY: [-550, 0],
      delay: anime.stagger(100, { start: 1000 }),
    });
  })();
});
