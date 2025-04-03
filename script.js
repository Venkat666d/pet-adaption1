document.addEventListener("DOMContentLoaded", function () {
    // Swiper Initialization
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        on: {
            init: function () {
                animateHeroContent(this.slides[this.activeIndex]);
            },
            slideChange: function () {
                animateHeroContent(this.slides[this.activeIndex]);
            },
        },
    });

    function animateHeroContent(slide) {
        const title = slide.querySelector("h1");
        const description = slide.querySelector("p");
        const buttons = slide.querySelector(".buttons");

        if (title && description && buttons) {
            title.classList.remove("fadeInDown");
            description.classList.remove("fadeInUp");
            buttons.classList.remove("fadeInUp");

            // Trigger reflow
            void title.offsetWidth;
            void description.offsetWidth;
            void buttons.offsetWidth;

            title.classList.add("fadeInDown");
            description.classList.add("fadeInUp");
            buttons.classList.add("fadeInUp");
        }
    }

    // Login & Logout Functionality
    const userEmailDisplay = document.getElementById("user-email");
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const adoptNowBtn = document.querySelector(".cta-button");

    // Check stored login info
    let userName = localStorage.getItem("loggedInUser") || localStorage.getItem("loggedInEmail") || localStorage.getItem("userEmail");

    if (userName) {
        let shortName = userName.includes("@") ? userName.split("@")[0] : userName; // Extract before '@' if email
        userEmailDisplay.textContent = `Welcome, ${shortName}`;
        userEmailDisplay.style.display = "inline-block"; 
        loginBtn.style.display = "none"; 
        logoutBtn.style.display = "inline-block";

        // Move email display next to "Adopt Now" button
        adoptNowBtn.insertAdjacentElement("afterend", userEmailDisplay);
    } else {
        userEmailDisplay.style.display = "none";
        logoutBtn.style.display = "none";
        loginBtn.style.display = "inline-block";
    }

    // Logout Functionality
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("loggedInEmail");
        localStorage.removeItem("userEmail"); 
        window.location.href = "login.html"; // Redirect to login page
    });
});
