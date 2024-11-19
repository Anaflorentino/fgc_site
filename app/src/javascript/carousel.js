const imagesContainer = document.querySelector('.why-choose__carousel__images');
const images = document.querySelectorAll('.why-choose__carousel__images img');
const totalImages = images.length;
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  imagesContainer.style.transform = `translateX(${offset}%)`;
}

// Muda a imagem a cada 3 segundos
setInterval(nextImage, 3000);
