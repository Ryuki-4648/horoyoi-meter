const animation = (className) => {
  document.querySelectorAll(className).forEach((element) => {
    const target = element.offsetTop;
    const scroll = window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (scroll > target - windowHeight) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', () => {
  animation('.up');
  animation('.down');
});




