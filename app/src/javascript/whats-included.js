document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('l-arrow');
    const rightArrow = document.getElementById('r-arrow');
    const viewAllButton = document.querySelector('.view-all');
    const includedServices = document.querySelector('.included-services');
    const section = document.querySelector('.whats-included');
  
    // Define a quantidade de rolagem lateral por clique
    const scrollAmount = 200;
  
    // Evento para a seta da esquerda
    leftArrow.addEventListener('click', () => {
      includedServices.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth', // Rola suavemente
      });
    });
  
    // Evento para a seta da direita
    rightArrow.addEventListener('click', () => {
      includedServices.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', // Rola suavemente
      });
    });
  
    // Evento para o botão "View all" / "View less"
    viewAllButton.addEventListener('click', (event) => {
      event.preventDefault();
  
      if (!includedServices.classList.contains('expanded')) {
        // Expande o conteúdo
        includedServices.classList.add('expanded');
        viewAllButton.textContent = 'View less';
  
        // Garante que a rolagem horizontal continue funcional
        includedServices.style.overflowX = 'hidden';
      } else {
        // Recolhe o conteúdo
        includedServices.classList.remove('expanded');
        viewAllButton.textContent = 'View all';
  
        // Volta o overflow horizontal e rola para o topo da seção
        includedServices.style.overflowX = 'auto';
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  