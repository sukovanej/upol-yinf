function setupCloseButton() {
    let navElement = document.querySelector("header nav");

    document.getElementById("logo-icon").addEventListener("click", () => {
        if (window.screen.width <= 1200) {
            if (navElement.style.display != "block") {
                navElement.style.display = "block";
            } else {
                navElement.style.display = "none";
            }
        }
    });
}
