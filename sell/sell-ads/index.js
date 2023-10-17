function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  const elementsToAnimate = document.querySelectorAll('.animated.fade-in');

  elementsToAnimate.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
});

window.addEventListener('load', () => {
  const elementsToAnimate = document.querySelectorAll('.animated.fade-in');

  elementsToAnimate.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('load', scrollToTop);

