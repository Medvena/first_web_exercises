// Exercise 5 : Keyboard Keys display

let InputArray = [];

export function exercise5() {

    const lastInputText = document.getElementById("text5");

    // Listen to every keyboard input
    document.addEventListener("keydown", (event) => {

        // Manage the display with different keyboard inputs
        if (event.key === "Delete") {
            InputArray = [];
        } else if (event.key === "Backspace") {
            InputArray.pop();

        } else {
            InputArray.push(event.key);
        }

        if (InputArray.length < 1) {
            lastInputText.textContent = "Write something";
        } else {
            lastInputText.textContent = InputArray.join(" ");
        }
    })
}