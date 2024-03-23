export function updateRandomnessValue(globalData, value) {
    globalData.randomnessAmount = value;
    document.getElementById('randomnessAmountValue').textContent = value;
}

export function submitValue() {
    var userGridSize = document.getElementById('userGridSize').value;
    // Store the value in localStorage so it can be retrieved after the page reloads
    localStorage.setItem('userGridSize', userGridSize);

    // Reload the page
    location.reload();
}

export function retrieveGlobalData(globalData, canvas) {
    if (localStorage.getItem('userGridSize') !== null) {
        globalData.gridHeight = parseInt(localStorage.getItem('userGridSize'));
        globalData.gridWidth = parseInt(localStorage.getItem('userGridSize'));
        if (globalData.gridHeight > 1000) {
            globalData.gridHeight = 1000;
        }
        if (globalData.gridWidth > 1000) {
            globalData.gridWidth = 1000;
        }
        globalData.cellSize = canvas.width / globalData.gridWidth;
    } else {
        console.log('No value in localStorage');
    }
    // Set the default values of the form inputs
    document.getElementById('userGridSize').value = globalData.gridHeight;

    // Adjust the canvas size
    canvas.width = globalData.gridWidth * globalData.cellSize;
    canvas.height = globalData.gridHeight * globalData.cellSize;
}


