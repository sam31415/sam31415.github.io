
export function updateRandomnessValue(globalData, value) {
    globalData.randomnessAmount = parseFloat(value);
    document.getElementById('randomnessAmountValue').textContent = value;
}

export function submitValue(globalData) {
    var userGridHeight = document.getElementById('userGridHeight').value;
    var userGridWidth = document.getElementById('userGridWidth').value;
    var userTimeout = document.getElementById('userTimeout').value;
    var userXShiftElement = document.getElementById('userXShift');
    var userXShift = userXShiftElement ? userXShiftElement.value : globalData.userXShift;
    var userYShiftElement = document.getElementById('userYShift');
    var userYShift = userYShiftElement ? userYShiftElement.value : globalData.userYShift;
    var userFlipXElement = document.getElementById('userFlipX');
    var userFlipX = userFlipXElement ? userFlipXElement.checked : globalData.userFlipX;
    var userFlipYElement = document.getElementById('userFlipY');
    var userFlipY = userFlipYElement ? userFlipYElement.checked : globalData.userFlipY;
    var userRandomnessOnElement = document.getElementById('randomnessCheckbox');
    var userRandomnessOn = userRandomnessOnElement ? userRandomnessOnElement.checked : globalData.addRandomness;
    var userRandomnessAmountElement = document.getElementById('randomnessSlider');
    var userRandomnessAmount = userRandomnessAmountElement ? parseFloat(userRandomnessAmountElement.value) : globalData.randomnessAmount;
    var userColorPalette = document.getElementById('userColorPalette').value;
    var metaRule = document.getElementById('metaRule').value;
    var currentStyle = null;
    if (document.getElementById('currentStyle')) {
        currentStyle = document.getElementById('currentStyle').value;
    }

    // Store the value in localStorage so it can be retrieved after the page reloads
    //localStorage.setItem('userGridSize', userGridHeight);
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
    localStorage.setItem('metaRule', metaRule);
    localStorage.setItem('currentStyle', currentStyle);

    // Reload the page
    location.reload();
}

export function retrieveGlobalData(globalData) {
    if (localStorage.getItem('userGridHeight') !== null) {
        globalData.gridHeight = parseInt(localStorage.getItem('userGridHeight'));
        globalData.gridWidth = parseInt(localStorage.getItem('userGridWidth'));
        if (globalData.gridHeight > 1000) {
            globalData.gridHeight = 1000;
        }
        if (globalData.gridWidth > 1000) {
            globalData.gridWidth = 1000;
        }
        globalData.imageData = globalData.ctx.createImageData(globalData.gridWidth, globalData.gridHeight);
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
        globalData.rule = localStorage.getItem('metaRule');
        globalData.tempRuleStorage = localStorage.getItem('currentStyle');

        console.log('Retrieved value from previous session: ...');
    } else {
        console.log('No value in localStorage');
    }
    // Set the default values of the form inputs
    // document.getElementById('userGridSize').value = globalData.gridHeight;
    document.getElementById('userGridHeight').value = globalData.gridHeight;
    document.getElementById('userGridWidth').value = globalData.gridWidth;
    document.getElementById('userTimeout').value = globalData.timeout;
    let userXShift = document.getElementById('userXShift');
    if (userXShift) {
        userXShift.value = globalData.gridPeriodicityShiftX;
    } 
    let userYShift = document.getElementById('userYShift');
    if (userYShift) {
        userYShift.value = globalData.gridPeriodicityShiftY;
    }
    let userFlipX = document.getElementById('userFlipX');
    if (userFlipX) {
        userFlipX.checked = globalData.gridFlipX;
    }
    let userFlipY = document.getElementById('userFlipY');
    if (userFlipY) {
        userFlipY.checked = globalData.gridFlipY;
    }
    let randomnessCheckbox = document.getElementById('randomnessCheckbox');
    if (randomnessCheckbox) {
        randomnessCheckbox.checked = globalData.addRandomness;
    }
    let randomnessSlider = document.getElementById('randomnessSlider');
    if (randomnessSlider) {
        randomnessSlider.value = globalData.randomnessAmount;
    }
    document.getElementById('userColorPalette').value = globalData.colorPalette;
    document.getElementById('metaRule').value = globalData.rule;

    // Adjust the canvas size
    globalData.canvas.width = Math.max(globalData.gridHeight, globalData.gridWidth);
    globalData.canvas.height =  Math.max(globalData.gridHeight, globalData.gridWidth);
    globalData.canvasCornerX = 0 //Math.floor((globalData.canvas.width - globalData.gridWidth) / 2);
    globalData.canvasCornerY = 0 //Math.floor((globalData.canvas.height - globalData.gridHeight) / 2);

    // Adjusts the html canvas size so that no border remains in full screen mode
    var htmlCanvas = document.getElementById('gameCanvas');
    if (globalData.gridHeight > globalData.gridWidth) {
        var newWidth = Math.floor(globalData.gridWidth / globalData.gridHeight * 800);
        var newScale = 
        htmlCanvas.style.width = newWidth + 'px';
        htmlCanvas.style.height = 800 + 'px';
        htmlCanvas.width = newWidth * globalData.gridHeight / 800;
        htmlCanvas.height = globalData.gridHeight;
    } else {
        var newHeight = Math.floor(globalData.gridHeight / globalData.gridWidth * 800);
        htmlCanvas.style.width = 800 + 'px';
        htmlCanvas.style.height = newHeight + 'px';
        htmlCanvas.width = globalData.gridWidth;
        htmlCanvas.height = newHeight * globalData.gridWidth / 800;
    }

}


