document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
  
    // Show the modal on page load
    modalOverlay.style.display = 'flex';
  
    // Function to close the modal
    function close() {
      modalOverlay.style.display = 'none';
    }
  
    // Event listeners for closing the modal
    closeModal.addEventListener('click', close);
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        close();
      }
    });
  });
  