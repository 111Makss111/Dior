const swiper = new Swiper(".top-swiper", {
  // loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperAbout = new Swiper(".about-slider", {
  slidesPerView: 3.5,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".akardion-triger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const img = this.querySelector(".acardion-triger-img");

      if (content.classList.contains("open")) {
        content.classList.remove("open");
        img.style.transform = "rotate(0deg)";
      } else {
        document
          .querySelectorAll(".acardion-content")
          .forEach((c) => c.classList.remove("open"));
        document
          .querySelectorAll(".acardion-triger-img")
          .forEach((i) => (i.style.transform = "rotate(0deg)"));
        content.classList.add("open");
        img.style.transform = "rotate(180deg)";
      }
    });
  });
});
