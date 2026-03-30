// Exercise 2 : Button that change the color of a rectangle

export function exercise2() {
    const redButton = document.getElementById("button2Red");
    const greenButton = document.getElementById("button2Green");
    const blueButton = document.getElementById("button2Blue");
    const rectangle = document.getElementById("rectangle2");

    redButton.addEventListener("click", () => {
        rectangle.style.backgroundColor = "red";
    });

    greenButton.addEventListener("click", () => {
        rectangle.style.backgroundColor = "green";
    });

    blueButton.addEventListener("click", () => {
        rectangle.style.backgroundColor = "blue";
    });
}
