const buttons = document.querySelectorAll("[data-carousel-button")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector('[data-slides]')
   
      const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

/*Customer Review Section*/

var swiper = new Swiper('.review-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.00': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '@0.00': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '@0.00': {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
