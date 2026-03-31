// Exercise 10 : Controlled Stopwatch with buttons

export function exercise10() {
    const buttonPlayPause = document.getElementById('buttonPlayPause8');
    const buttonReset = document.getElementById('buttonReset8');
    const timerText = document.getElementById('text8');

    let deltaStored = 0; let delta = 0;
    let startTime = 0; let isActive = false;

    // Function to update the display of the timer
    function updateDisplay() {
        const ms = Math.floor(delta / 10) % 100;
        const s  = Math.floor(delta / 1000) % 60;
        const m  = Math.floor(delta / (1000 * 60)) % 60;
        const h  = Math.floor(delta / (1000 * 60 * 60));
        timerText.textContent = `Time: ${pad(h)}:${pad(m)}:${pad(s)}:${pad(ms)}`;
    }
    // return a string with at least 2 characters, adding a "0" at the start if necessary
    const pad = n => n.toString().padStart(2, '0');

    updateDisplay()

    // RAF loop to update the timer display when active
    function animate() {
        if (isActive) {
            delta = (Date.now() - startTime) + deltaStored;
            updateDisplay()
        }
        requestAnimationFrame(animate);
    }

    // Start or pause the timer when the play/pause button is clicked
    buttonPlayPause.addEventListener('click', () => {
        isActive = !isActive;
        if (isActive) {
            requestAnimationFrame(animate);
            startTime = Date.now()
        } else {
            deltaStored = delta;
        }
    });

    // Stop and reset the timer
    buttonReset.addEventListener('click', () => {
        isActive = false;
        delta = 0;
        deltaStored = 0;
        updateDisplay()
    });
}