document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os custom-selects na página
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(customSelect => {
        const selectInput = customSelect.querySelector('.select-input');
        const selectOptions = customSelect.querySelector('.select-options');
        const selectPlaceholder = customSelect.querySelector('.select-placeholder');
        const hiddenInput = customSelect.querySelector('input[type="hidden"]');

        // Toggle dropdown visibility
        selectInput.addEventListener('click', () => {
            customSelects.forEach(cs => {
                if (cs !== customSelect) {
                    cs.classList.remove('open'); // Fecha os outros selects
                }
            });
            customSelect.classList.toggle('open');
        });

        // Handle option selection
        selectOptions.addEventListener('click', (event) => {
            if (event.target.closest('.select-option')) {
                const selectedOption = event.target.closest('.select-option');
                const selectedValue = selectedOption.dataset.value;
                const selectedText = selectedOption.textContent.trim();
                const selectedIconSrc = selectedOption.querySelector('img').src;

                // Update the input placeholder with the selected value
                selectPlaceholder.textContent = selectedText;
                selectPlaceholder.style.color = '#000';

                // Update the input icon
                const inputIcon = selectInput.querySelector('.select-icon');
                inputIcon.src = selectedIconSrc;

                // Update the hidden input value
                hiddenInput.value = selectedValue;

                // Close the dropdown
                customSelect.classList.remove('open');
            }
        });

        // Close the dropdown if clicked outside
        document.addEventListener('click', (event) => {
            if (!customSelect.contains(event.target)) {
                customSelect.classList.remove('open');
            }
        });
    });
});