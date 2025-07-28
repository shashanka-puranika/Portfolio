// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Contact form submission (placeholder)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  });
}

// Newsletter form submission (placeholder)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing to my newsletter!');
    this.reset();
  });
}

// Animate on scroll (basic)
const animatedElements = document.querySelectorAll('.animate__animated');
const onScroll = () => {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('animate__fadeInUp');
    }
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      darkModeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}

// Persist dark mode preference
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = '☀️';
  }
});
