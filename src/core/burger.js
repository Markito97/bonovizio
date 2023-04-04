export const burger = () => {
  const menu = document.querySelector(".menu");
  const burgerBtn = document.querySelector(".burger__menu");

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
};
