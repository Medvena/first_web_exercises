// Exercise 3 : Buttons that count +1 or -1 with a display

let count = 0;

export function exercise3() {
    const plusButton = document.getElementById('buttonPlus1');
    const minusButton = document.getElementById('buttonMinus1');
    const counterText = document.getElementById('text3');

    plusButton.addEventListener('click', () => {
        count++;
        counterText.innerText = count.toString();
    });

    minusButton.addEventListener('click', () => {
        count--;
        counterText.innerText = count.toString();
    })
}