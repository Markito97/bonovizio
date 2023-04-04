import anime from "animejs/lib/anime.es.js";

export const chatSvgAnimation = () => {
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
    direction: "alternate",
    loop: true,
    easing: "linear",
  });
};
