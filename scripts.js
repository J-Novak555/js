window.addEventListener('DOMContentLoaded', () => {

  const offset = 74; // výška fixního navbaru

  // Logo scroll nahoru
  const logo = document.getElementById("logoLink");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Menu scroll
  const navLinks = document.querySelectorAll('[data-scroll]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scroll');
      const target = document.getElementById(targetId);
      if (target) {
        // přesně spočítáme pozici s offsetem
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Shrink navbar
  const navbar = document.querySelector('#mainNav');
  const shrinkNavbar = () => {
    if (!navbar) return;
    if (window.scrollY === 0) navbar.classList.remove('navbar-shrink');
    else navbar.classList.add('navbar-shrink');
  };
  shrinkNavbar();
  document.addEventListener('scroll', shrinkNavbar);

  // Collapse responsive navbar
  const navbarToggler = document.querySelector('.navbar-toggler');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
})
