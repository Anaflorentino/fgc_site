const toggle = document.getElementById('pet-friendly-toggle');
        toggle.addEventListener('change', () => {
            const message = toggle.checked ? "Active: Pet Friendly" : "Disabled: Pet Friendly";
            console.log(message);
        });