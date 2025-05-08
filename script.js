// Sticky header logo behavior on scroll (optional placeholder)
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.style.padding = '0 1rem';
  } else {
    header.style.padding = '0 1rem';
  }
});
