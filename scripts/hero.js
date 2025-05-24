document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let current = 0;
  const slideCount = slides.length;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.zIndex = i === index ? '2' : '1';
      slide.style.transition = 'opacity 0.5s ease-in-out';
    });
    current = index;
  }

  function nextSlide() {
    let nextIndex = (current + 1) % slideCount;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (current - 1 + slideCount) % slideCount;
    showSlide(prevIndex);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 2000);
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
