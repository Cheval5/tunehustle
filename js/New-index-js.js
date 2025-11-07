// ===============================
// Scroll-triggered Reveal Animations
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal, .fade-up, .slide-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // Add staggered delay based on index order
        el.style.transitionDelay = `${i * 0.12}s`;
        el.classList.add("active");

        // Once revealed, unobserve to avoid retriggering
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach((el) => observer.observe(el));
});

// ===============================
// Soft Parallax Float for Gradient Blobs
// ===============================

(function () {
  const blobs = document.querySelectorAll(".gradient-blob");
  let lastScroll = 0;

  function parallax() {
    const scrollY = window.scrollY;
    const diff = scrollY - lastScroll;
    lastScroll = scrollY;

    blobs.forEach((blob, i) => {
      // small offset for each blob (creates layered motion)
      const speed = 0.1 + i * 0.05;
      blob.style.transform = `translateY(${scrollY * speed}px)`;
    });

    requestAnimationFrame(parallax);
  }

  requestAnimationFrame(parallax);
})();

const whyItems = document.querySelectorAll('.why-choose li');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('active'), index * 120);
    }
  });
});
whyItems.forEach(item => observer.observe(item));

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const dots = document.querySelectorAll(".dot");
  const slider = document.querySelector(".testimonial-slider");
  if (!track || !dots.length) return;

  let index = 0;
  let interval;

  function showSlide(n) {
    index = n;
    track.style.transform = `translateX(-${n * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[n].classList.add("active");
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      index = (index + 1) % dots.length;
      showSlide(index);
    }, 5500);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  // Start autoplay
  startAutoSlide();

  // Pause on hover
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  // Manual click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });
});


  const modal = document.getElementById("freebieModal");
  const openModal = document.getElementById("openFreebieModal");
  const closeModal = document.getElementById("closeFreebieModal");

  openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Simulated form submission
  document.getElementById("freebieForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Free checklist sent to your email!");
    modal.style.display = "none";
  });



