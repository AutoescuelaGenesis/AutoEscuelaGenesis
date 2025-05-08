window.addEventListener('scroll', () => {
  const header = document.querySelector('.hero');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
