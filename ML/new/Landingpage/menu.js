document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', function() {
        // Uncheck the checkbox to close the overlay
        document.getElementById('overlay-input').checked = false;
    });
});