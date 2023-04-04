import anime from "animejs/lib/anime.es.js";

export const promoTextAnimation = () => {
  anime({
    targets: ".promo__text-wrapper",
    opacity: 1,
    easing: "linear",
    duration: 1500,
  });
};
