let cycleSlides = (direction) => {
    return () => {
        var wrapper = document.getElementsByClassName("slides");
        let slides = document.querySelectorAll(".slides > article");
        let elements = document.createDocumentFragment();

        if (direction == "left") {
            for (let i = 1; i < slides.length; i++) {
                elements.appendChild(slides[i]);
            }
            elements.appendChild(slides[0]);

            wrapper[0].innerHTML = null;
            wrapper[0].appendChild(elements);
        } else {
            elements.appendChild(slides[slides.length - 1]);
            for (let i = 0; i < slides.length - 1; i++) {
                elements.appendChild(slides[i]);
            }

            wrapper[0].innerHTML = null;
            wrapper[0].appendChild(elements);
        }
    }
};

function setupSlideshow() {
    let leftButton = document.getElementById("slideshow-button-left");
    let rightButton = document.getElementById("slideshow-button-right");

    if (leftButton !== null && rightButton !== null) {
	leftButton.addEventListener("click", cycleSlides("left"));
	rightButton.addEventListener("click", cycleSlides("right"));
    }
}
