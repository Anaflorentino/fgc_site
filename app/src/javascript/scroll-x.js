document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonials__cards');
    const leftButton = document.getElementById('left-arrow');
    const rightButton = document.getElementById('right-arrow');
  
    // Define a quantidade de rolagem por clique
    const scrollAmount = 300;
  
    // Evento para o botão da esquerda
    leftButton.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth', // Animação suave
      });
    });
  
    // Evento para o botão da direita
    rightButton.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', // Animação suave
      });
    });
  });
  