document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach((accordion) => {
      accordion.addEventListener('click', () => {
        const isOpen = accordion.classList.contains('accordion--is-open');
  
        // Fecha todos os outros acordeões
        accordions.forEach((acc) => {
          acc.classList.remove('accordion--is-open');
          acc.classList.add('accordion--is-closed');
  
          // Alterna o ícone para "add"
          const icon = acc.querySelector('.material-symbols-rounded');
          if (icon) icon.textContent = 'add';
        });
  
        // Alterna o estado do acordeão clicado
        if (!isOpen) {
          accordion.classList.remove('accordion--is-closed');
          accordion.classList.add('accordion--is-open');
  
          // Alterna o ícone para "remove"
          const icon = accordion.querySelector('.material-symbols-rounded');
          if (icon) icon.textContent = 'remove';
        }
      });
    });
  });
  