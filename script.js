document.addEventListener("DOMContentLoaded", function () {
    console.log("Bird Travel Website Loaded");

    const waButton = document.querySelector(".button");

    if (waButton) {
        waButton.addEventListener("mouseover", function () {
            waButton.style.transform = "scale(1.05)";
        });

        waButton.addEventListener("mouseout", function () {
            waButton.style.transform = "scale(1)";
        });
    }
});
