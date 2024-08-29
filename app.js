// Function to generate a random color in hex format
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a random gradient
function generateRandomGradient() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    return `linear-gradient(to right, ${color1}, ${color2})`;
}

// Function to set the color box and display the color code
function setColor() {
    const color = generateRandomColor();
    document.getElementById('color-box').style.background = color;
    document.getElementById('color-code').textContent = color;
}

// Function to set the color box with a gradient and display the gradient code
function setGradient() {
    const gradient = generateRandomGradient();
    document.getElementById('color-box').style.background = gradient;
    document.getElementById('color-code').textContent = gradient;
}

// Function to copy the color code to the clipboard
function copyColorCode() {
    const colorCode = document.getElementById('color-code').textContent;
    navigator.clipboard.writeText(colorCode)
        .then(() => {
            alert('Code copied to clipboard: ' + colorCode);
        })
        .catch(err => {
            alert('Failed to copy code: ' + err);
        });
}

// Add event listeners for buttons
document.getElementById('generate-color-btn').addEventListener('click', setColor);
document.getElementById('generate-gradient-btn').addEventListener('click', setGradient);
document.getElementById('copy-btn').addEventListener('click', copyColorCode);

// Initialize with a random color
setColor();
