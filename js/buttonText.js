// Exercise 1 : Button that change text

export function exercise1() {
    const listOfTexts = ["Hi everybody !", "I love waffles", "My name is Ema", "My favorite character is Mizuki"
        , "2 + 2 = 4", "Have you seen my bear ?", "Oh wow.. another switch", "Cheeeeeese"]

    // Get every element we need from the HTML
    const switchButton = document.getElementById('button1');
    const displayText = document.getElementById('text1');

    // Add the click to the button
    switchButton.addEventListener('click', () => {
        const randomNumber = Math.random() * listOfTexts.length;
        displayText.textContent = listOfTexts[Math.floor(randomNumber)];
    });
}
