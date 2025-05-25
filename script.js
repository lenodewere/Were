// script.js

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  // Save theme preference
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});