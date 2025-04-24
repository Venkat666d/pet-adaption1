document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const phone = document.querySelector("#phone").value;
        const email = document.querySelector("#email").value;
        const fullname = document.querySelector("#fullname").value;
        const message = document.querySelector("#message").value;

        const subject = encodeURIComponent("Contact Form Submission from " + fullname);
        const body = encodeURIComponent(
            `Name: ${fullname}\n` +
            `Email: ${email}\n` +
            `Telephone: ${phone}\n\n` +
            `Message:\n${message}`
        );

        const mailtoLink = `mailto:batch12@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        this.reset();
    });
});
