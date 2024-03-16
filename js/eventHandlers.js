import { submitValue, updateRandomnessValue } from './formHandlers.js';


export function addRandomnessCheckboxListener(globalData) {
    document.getElementById('randomnessCheckbox').addEventListener('change', function() {
        globalData.addRandomness = this.checked; // Set the variable to the checkbox's state
    });
}

export function addFullscreenButtonListener(canvas) {
    document.getElementById('fullscreenButton').addEventListener('click', function() {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) { // Firefox
            canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) { // IE/Edge
            canvas.msRequestFullscreen();
        }
    });
}

export function addMouseMoveListener(globalData, canvas) {
    canvas.addEventListener('mousemove', function(event) {
        if (event.shiftKey){
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;

            var i = Math.floor(x / globalData.cellSize);
            var j = Math.floor(y / globalData.cellSize);

            globalData.grid[i][j] = 1;
        }
    });
}

export function addMouseDownListener(globalData, canvas) {
    canvas.addEventListener('mousedown', function(event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var i = Math.floor(x / globalData.cellSize);
        var j = Math.floor(y / globalData.cellSize);
        if (!event.shiftKey && !event.ctrlKey) {
            globalData.grid[(i+1) % globalData.gridHeight][(j+1) % globalData.gridWidth] = 1
            globalData.grid[(i-1+globalData.gridHeight) % globalData.gridHeight][(j+1) % globalData.gridWidth] = 1;
            globalData.grid[(i-1+globalData.gridHeight) % globalData.gridHeight][(j-1+globalData.gridWidth) % globalData.gridWidth] = 1
            globalData.grid[(i+1) % globalData.gridHeight][(j-1+globalData.gridWidth) % globalData.gridWidth] = 1;
        } else if (event.shiftKey && !event.ctrlKey) {
            globalData.grid[i][(j+1) % globalData.gridWidth] = 1
            globalData.grid[i][j] = 1;
            globalData.grid[(i+1) % globalData.gridHeight][j] = 1
        } else if (!event.shiftKey && event.ctrlKey) {
            globalData.grid[i][j] = 1;
            globalData.grid[(i+1) % globalData.gridHeight][j] = 1;
        } else if (event.shiftKey && event.ctrlKey) {
            globalData.grid[i][j] = 1;
            globalData.grid[i][(j+1) % globalData.gridWidth] = 1;
        }
    });
}

export function addSubmitListener(globalData) {
    document.getElementById('submitButton').addEventListener('click', function() {
        submitValue(globalData);
    });
}

export function addRandomnessSliderListener(globalData) {
    document.getElementById('randomnessSlider').addEventListener('input', function() {
        updateRandomnessValue(globalData, this.value);
    });
}

export function addPeriodicityListeners(globalData) {
    document.getElementById('userXShift').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.gridPeriodicityShiftX = value;
    });
    document.getElementById('userYShift').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.gridPeriodicityShiftY = value;
    });
    document.getElementById('userFlipX').addEventListener('change', function() {
        globalData.gridFlipX = this.checked;
    });
    document.getElementById('userFlipY').addEventListener('change', function() {
        globalData.gridFlipY = this.checked;
    });
}

export function addTimeoutListener(globalData) {
    document.getElementById('userTimeout').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.timeout = value;
    });
}

export function addColorPaletteListener(globalData) {
    document.getElementById('userColorPalette').addEventListener('change', function() {
        globalData.colorPalette = this.value;
        determineColorPalette(globalData);
    });
}

export function determineColorPalette(globalData){
    var yellow = 'rgb(247, 255, 28)'
    var blue = 'rgb(13, 112, 255)'
    var grey = 'rgb(240, 239, 239)'
    var black = 'rgb(0, 0, 0)'

    if (globalData.colorPalette == 'yellow') {
        globalData.backgroundColor = yellow;
        globalData.activatedColor = black;
        globalData.deadColor = blue;
        globalData.superActivatedColor = grey;
    }
    else if (globalData.colorPalette == 'blue') {
        globalData.backgroundColor = blue;
        globalData.activatedColor = grey;
        globalData.deadColor = black;
        globalData.superActivatedColor = yellow;
    }
    else if (globalData.colorPalette == 'grey') {
        globalData.backgroundColor = grey;
        globalData.activatedColor = black;
        globalData.deadColor = blue;
        globalData.superActivatedColor = yellow;
    }
    else if (globalData.colorPalette == 'black') {
        globalData.backgroundColor = black;
        globalData.activatedColor = blue;
        globalData.deadColor = yellow;
        globalData.superActivatedColor = grey;
    }
}