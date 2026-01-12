const els = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        observer.unobserve(e.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

els.forEach((el) => observer.observe(el));
