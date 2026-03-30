// Exercise 4 : Toggle button that hides or shows an element

export function exercise4() {
    const buttonToggle = document.getElementById('button4');
    const image = document.getElementById('image4');

    buttonToggle.addEventListener("click", () => {
        // Manage the toggle
        image.classList.toggle("hidden");
        buttonToggle.classList.toggle("active");

        if (image.classList.contains("hidden")) {
            buttonToggle.textContent = "SHOW";
        } else {
            buttonToggle.textContent = "HIDE";
        }
    });

}