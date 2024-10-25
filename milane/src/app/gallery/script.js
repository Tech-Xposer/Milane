// JavaScript for generating stars dynamically
document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector(".sparkling-stars");
  const numStars = 100; // Adjust number of stars

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starContainer.appendChild(star);
  }
});

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // Show the modal
    modalImg.src = event.target.src; // Set modal image to clicked image
  });
});

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("image-modal").style.display = "none"; // Hide the modal
});
