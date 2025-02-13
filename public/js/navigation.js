document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLinks = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header');

  // Show menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Hide menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Hide menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  // **Highlight Active Menu Item**
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default to 'index.html' if empty

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (currentPage === linkPage) {
      link.classList.add('active-link'); // Add active class
    }
  });

  // **Show & Hide Navigation on Scroll**
  let lastScrollPosition = window.pageYOffset;

  window.addEventListener('scroll', () => {
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
      header.style.top = '-20vh'; // Hide header when scrolling down
    } else {
      header.style.top = '0'; // Show header when scrolling up
    }

    lastScrollPosition = currentScrollPosition;
  });
});
