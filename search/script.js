function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function redirectToLogin() {
    window.location.href = "login.html"; // Replace with actual login page
}

window.onclick = function(event) {
    let popup = document.getElementById("popup");
    if (event.target === popup) {
        hidePopup();
    }
}
