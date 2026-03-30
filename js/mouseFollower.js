// Exercise 9 : Smooth mouse follower in a canvas

export function exercise9() {
    const canvas = document.getElementById("canvas9");
    const ctx = canvas.getContext("2d");

    // Coordinates variables
    let targetX = 40;
    let targetY = 40;
    let circleX = 40;
    let circleY = 40;

    // Resize the canvas when the window is resized
    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }

    window.addEventListener("resize", () => {
        resizeCanvas()
    });

    // Store the coordinates at each mouse move
    canvas.addEventListener("mousemove", (event) => {
        targetX = event.offsetX;
        targetY = event.offsetY;
    });

    // Draw a circle
    function drawCircle(x, y) {
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
    }

    // Animate the circle to follow the mouse with a delay
    function animate() {
        circleX += (targetX - circleX) * 0.05;
        circleY += (targetY - circleY) * 0.05;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCircle(circleX, circleY);
        requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate);
    resizeCanvas();

}