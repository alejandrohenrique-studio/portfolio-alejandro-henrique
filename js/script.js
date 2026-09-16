// ================================
// ANIMAÇÃO INICIAL DO HERO
// ================================

const heroElements = document.querySelectorAll(
  ".hero-intro, .hero h1, .hero h2, .hero-description, .hero-buttons"
);

heroElements.forEach((element, index) => {
  element.classList.add("hero-animate");

  setTimeout(() => {
    element.classList.add("hero-visible");
  }, 150 + index * 150);
});

// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const revealElements = document.querySelectorAll(
  ".about-content, .projects-content, .technologies-content, .experience-content, .education-content, .contact-content"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});