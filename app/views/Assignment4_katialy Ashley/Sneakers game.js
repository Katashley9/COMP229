// Game configuration and settings
const config = {
    canvasWidth: 800,
    canvasHeight: 600,
    bugSize: 100,
    initialHoppingInterval: 2000,
    hoppingIntervalDecrement: 300,
};

// Create the canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

// Background image
const backgroundImage = new Image();
backgroundImage.onload = function () {
    render();
};
backgroundImage.src = "image/nike.jpg";

// Game objects
const bug = {
    speed: 256,
    x: 5,
    y: 5,
    timer: 0,
};
let score = 0;
let hoppingInterval = config.initialHoppingInterval;

// Update bug position and check for collisions
const update = function (modifier) {
    bug.timer -= modifier;
    if (bug.timer <= 0) {
        bug.timer = hoppingInterval / 1000;
        bug.x = Math.random() * (config.canvasWidth - config.bugSize);
        bug.y = Math.random() * (config.canvasHeight - config.bugSize);
    }
};

// Reset the bug's movement timer
const resetBugTimer = function () {
    bug.timer = hoppingInterval / 1000;
};

// Reset the game speed to the initial hopping interval
const resetSpeed = function () {
    hoppingInterval = config.initialHoppingInterval;
    resetBugTimer();
};

// Reset the score to zero
const resetScore = function () {
    score = 0;
    resetSpeed();
};

// Render game objects on the canvas
const render = function () {
    // Clear the canvas
    ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);

    // Draw the background image
    ctx.drawImage(backgroundImage, 0, 0, config.canvasWidth, config.canvasHeight);

    // Draw the bug
    const bugImage = new Image();
    bugImage.src = "image/r-low.jpeg";
    ctx.drawImage(bugImage, bug.x, bug.y, config.bugSize, config.bugSize);

    // Draw the score
    ctx.fillStyle = "#000000";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, config.canvasWidth / 2, 30);
};

// Click event handler
canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if (
        clickX >= bug.x &&
        clickX <= bug.x + config.bugSize &&
        clickY >= bug.y &&
        clickY <= bug.y + config.bugSize
    ) {
        score++;
        hoppingInterval -= config.hoppingIntervalDecrement;
        bug.timer *= 0.5; // Make the bug move twice as fast
        resetBugTimer();
        render();
    }
});

// Game loop
const main = function () {
    const now = Date.now();
    const delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.mozRequestAnimationFrame;

// Start the game
let then = Date.now();
resetBugTimer();
main();

