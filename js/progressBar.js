// Exercise 6 : Progress bar with slider

export function exercise6() {
    const slider = document.getElementById("slider6");
    const progress = document.getElementById("progress6");

    // Input type to trigger at each change of the slider
    slider.addEventListener("input", () => {
        const hue = (slider.value / 100) * 360;
        progress.style.width = slider.value + "%";
        progress.textContent = slider.value + "%";

        // Change the color of the progress bar with the slider value
       progress.style.backgroundColor = `hsl(${hue}, ${slider.value}%, 50%)`;
    })
}