document.addEventListener('DOMContentLoaded', () => {
    const supportModal = document.getElementById('supportModal');
    const supportLink = document.getElementById('supportLink');
    const closeSupportModal = document.querySelector('#supportModal .close-button');
    const modalContent = document.querySelector('#supportModal .modal');

    // Função para abrir a modal de suporte
    const openSupportModal = () => {
        supportModal.style.display = 'flex';
    };

    // Função para fechar a modal de suporte
    const closeSupport = () => {
        supportModal.style.display = 'none';
    };

    // Event listeners
    supportLink.addEventListener('click', (event) => {
        event.preventDefault(); // Impede navegação do link
        openSupportModal();
    });

    if (closeSupportModal) {
        closeSupportModal.addEventListener('click', closeSupport);
    }

    // Fecha a modal ao clicar fora do conteúdo
    supportModal.addEventListener('click', (event) => {
        // Verifica se o clique foi no próprio overlay e não no conteúdo da modal
        if (!modalContent.contains(event.target)) {
            closeSupport();
        }
    });
});

  