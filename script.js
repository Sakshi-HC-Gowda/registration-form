document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".background-particles");

  // Generate 25 floating particles
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size between 5px and 20px
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random horizontal start position
    particle.style.left = `${Math.random() * 100}%`;

    // Random animation duration (8–18s)
    const duration = Math.random() * 10 + 8;
    particle.style.animationDuration = `${duration}s`;

    // Random delay (0–10s)
    particle.style.animationDelay = `${Math.random() * 10}s`;

    // Soft color variation
    const shades = ["#dda0dd", "#d8bfd8", "#e6e6fa", "#ba55d3"];
    particle.style.background = shades[Math.floor(Math.random() * shades.length)];
    particle.style.opacity = 0.25 + Math.random() * 0.4;

    background.appendChild(particle);
  }
});
