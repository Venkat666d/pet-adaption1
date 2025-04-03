document.addEventListener('DOMContentLoaded', () => {
    // Like Button Toggle
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    // Pet Type Filter
    const petFilter = document.getElementById('pet-filter');
    petFilter.addEventListener('change', () => {
        const selectedType = petFilter.value;
        document.querySelectorAll('.pet-card').forEach(card => {
            if (selectedType === 'all' || card.getAttribute('data-type') === selectedType) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
    function redirectToHeart(name, age, breed, location, image) {
        // Redirect to heart.html with query parameters
        const url = `heart.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&breed=${encodeURIComponent(breed)}&location=${encodeURIComponent(location)}&image=${encodeURIComponent(image)}`;
        window.location.href = url;
    }