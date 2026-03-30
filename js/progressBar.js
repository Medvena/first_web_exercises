// Exercise 6 : Progress bar with slider

export function exercise6() {
    const slider = document.getElementById("slider6");
    const progress = document.getElementById("progress6");

    slider.addEventListener("input", () => {
       progress.style.width = slider.value + "%";
       progress.innerHTML = slider.value + "%";
    })
}