// Updated hero.js for <img> based slideshow

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let current = 0;
  const slideCount = slides.length;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    const nextIndex = (current + 1) % slideCount;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (current - 1 + slideCount) % slideCount;
    showSlide(prevIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  // Initial display
  showSlide(current);
  startAutoSlide();

  // Event listeners for arrows
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }
});
