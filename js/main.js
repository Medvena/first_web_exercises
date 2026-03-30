import { exercise1 } from './buttonText.js'
import { exercise2 } from './buttonsColors.js'
import { exercise3 } from './buttonsCounter.js'
import { exercise4 } from './buttonToggle.js'
import { exercise5 } from './keyboardDisplay.js'
import { exercise6 } from './progressBar.js'
import { exercise9 } from './mouseFollower.js'

document.addEventListener("DOMContentLoaded", () => {

    // Manage the toggle buttons for the levels (hide and show the content of a level)
    const buttons = document.querySelectorAll('.toggleLevel')

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            const level = button.closest(".level");
            const content = level.querySelector(".level-content");

            content.classList.toggle("hidden");

            if (content.classList.contains("hidden")) {
                button.textContent = "···";
            } else {
                button.textContent = "―";
            }
        })
    })

    // Launch all exercises
    exercise1();
    exercise2();
    exercise3();
    exercise4();
    exercise5();
    exercise6();
    exercise9();
});