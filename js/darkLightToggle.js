// Exercise 8 : Dark / Light mode toggle with button

export function exercise8() {

    const buttonDarkMode = document.getElementById('button8');

    buttonDarkMode.addEventListener('click', () => {

        if (document.body.classList.contains("dark")) {
            buttonDarkMode.textContent = "LIGHT";
        } else {
            buttonDarkMode.textContent = "DARK";
        }

        document.body.classList.toggle('dark');
        buttonDarkMode.classList.toggle("active");

    })
}