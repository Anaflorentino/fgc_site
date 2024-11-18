// Toggle para expandir/recolher conteúdos com line-clamp definidos
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
  
    toggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('data-expanded') === 'true';
        const content = button.previousElementSibling;
  
        if (isExpanded) {
          content.classList.remove('expanded');
          button.textContent = '5+ more';
        } else {
          content.classList.add('expanded');
          button.textContent = 'Show less';
        }
  
        button.setAttribute('data-expanded', !isExpanded);
      });
    });
  });
  