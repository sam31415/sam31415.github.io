export function updateRandomnessValue(globalData, value) {
    globalData.randomnessAmount = value;
    document.getElementById('randomnessAmountValue').textContent = value;
}

export function submitValue() {
    var userGridHeight = document.getElementById('userGridSize').value;
    var userGridWidth = document.getElementById('userGridSize').value;
    var userTimeout = document.getElementById('userTimeout').value;
    var userXShift = document.getElementById('userXShift').value;
    var userYShift = document.getElementById('userYShift').value;
    var userFlipX = document.getElementById('userFlipX').checked;
    var userFlipY = document.getElementById('userFlipY').checked;
    var userColorPalette = document.getElementById('userColorPalette').value;
    var userRandomnessOn = document.getElementById('randomnessCheckbox').checked;
    var userRandomnessAmount = document.getElementById('randomnessSlider').value;
    var userRule = document.getElementById('userRule').value;

    // Store the value in localStorage so it can be retrieved after the page reloads
    localStorage.setItem('userGridSize', userGridHeight);
    localStorage.setItem('userGridHeight', userGridHeight);
    localStorage.setItem('userGridWidth', userGridWidth);
    localStorage.setItem('userTimeout', userTimeout);
    localStorage.setItem('userXShift', userXShift);
    localStorage.setItem('userYShift', userYShift);
    localStorage.setItem('userFlipX', userFlipX);
    localStorage.setItem('userFlipY', userFlipY);
    localStorage.setItem('userColorPalette', userColorPalette);
    localStorage.setItem('userRandomnessOn', userRandomnessOn);
    localStorage.setItem('userRandomnessAmount', userRandomnessAmount);
    localStorage.setItem('userRule', userRule);

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
        globalData.timeout = parseInt(localStorage.getItem('userTimeout'));
        globalData.gridPeriodicityShiftX = parseInt(localStorage.getItem('userXShift'));
        if (isNaN(globalData.gridPeriodicityShiftX)) globalData.gridPeriodicityShiftX = 0;
        if (isNaN(globalData.gridPeriodicityShiftY)) globalData.gridPeriodicityShiftY = 0;
        globalData.gridPeriodicityShiftY = parseInt(localStorage.getItem('userYShift'));
        globalData.gridFlipX = localStorage.getItem('userFlipX') === 'true';
        globalData.gridFlipY = localStorage.getItem('userFlipY') === 'true';
        globalData.colorPalette = localStorage.getItem('userColorPalette');
        globalData.addRandomness = localStorage.getItem('userRandomnessOn') === 'true';
        globalData.randomnessAmount = parseFloat(localStorage.getItem('userRandomnessAmount'));
        globalData.rule = localStorage.getItem('userRule');
        console.log('Retrieved value from previous session: ' + globalData.gridHeight + '...');
    } else {
        console.log('No value in localStorage');
    }
    // Set the default values of the form inputs
    document.getElementById('userGridSize').value = globalData.gridHeight;
    //document.getElementById('userGridHeight').value = globalData.gridHeight;
    //document.getElementById('userGridWidth').value = globalData.gridWidth;
    document.getElementById('userTimeout').value = globalData.timeout;
    document.getElementById('userXShift').value = globalData.gridPeriodicityShiftX;
    document.getElementById('userYShift').value = globalData.gridPeriodicityShiftY;
    document.getElementById('userFlipX').checked = globalData.gridFlipX;
    document.getElementById('userFlipY').checked = globalData.gridFlipY;
    document.getElementById('userColorPalette').value = globalData.colorPalette;
    document.getElementById('randomnessCheckbox').checked = globalData.addRandomness;
    document.getElementById('randomnessSlider').value = globalData.randomnessAmount;
    document.getElementById('userRule').value = globalData.rule;

    // Adjust the canvas size
    canvas.width = globalData.gridWidth * globalData.cellSize;
    canvas.height = globalData.gridHeight * globalData.cellSize;
}


