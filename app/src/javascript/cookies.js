document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cookie-modal'); // Modal element
    const acceptButton = document.getElementById('accept-all'); // "Accept All" button
    const manageButton = document.getElementById('manage-preferences'); // "Only Necessary" button

    // Modal starts hidden
    if (modal) {
        modal.style.display = 'none';
    }

    // Show modal after 10 seconds
    setTimeout(() => {
        if (modal) {
            modal.style.display = 'flex'; // Show the modal
        } else {
            console.error('Cookie modal not found!');
        }
    }, 7000); // 7 seconds

    // Close the modal on "Accept All Cookies"
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'none';
                console.log('Cookies accepted!');
            }
        });
    } else {
        console.error('"Accept All Cookies" button not found!');
    }

    // Close the modal on "Only Necessary" (Manage Preferences)
    if (manageButton) {
        manageButton.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'none';
                console.log('Only necessary cookies enabled!');
            }
        });
    } else {
        console.error('"Only Necessary" button not found!');
    }
});
