// Exercise 7 : Generate a random number between input range with a button

export function exercise7() {
    const inputMin = document.getElementById('inputMin7');
    const inputMax = document.getElementById('inputMax7');
    const button = document.getElementById('button7');
    const resultText = document.getElementById('text7');

    button.addEventListener('click', (e) => {
        const minRange = Number(inputMin.value);
        const maxRange = Number(inputMax.value);

        if (minRange <= maxRange && inputMin.value !== "" && inputMax.value !== "") {
            resultText.textContent = (Math.floor( Math.random() * (maxRange - minRange + 1)) + minRange).toString();
        }
        else {
            resultText.textContent = "Please enter a valid range (min < max)";
        }
    });
}