document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.services__item');
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
  
        // Remove a classe ativa de todas as tabs
        tabs.forEach((t) => t.classList.remove('tab--is-active'));
  
        // Remove a classe ativa de todos os conteúdos
        contents.forEach((content) =>
          content.classList.remove('services__item--is-active')
        );
  
        // Adiciona a classe ativa à tab clicada
        tab.classList.add('tab--is-active');
  
        // Ativa o conteúdo correspondente
        const target = tab.getAttribute('data-target');
        const targetContent = document.querySelector(
          `.services__item[data-target="${target}"]`
        );
  
        if (targetContent) {
          targetContent.classList.add('services__item--is-active');
        }
      });
    });
  });
  