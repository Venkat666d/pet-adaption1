document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent! We will get back to you soon.");
        this.reset();
    });
});
