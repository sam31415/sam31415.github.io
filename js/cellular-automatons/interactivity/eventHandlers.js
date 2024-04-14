import { submitValue, updateRandomnessValue } from './formHandlers.js';
import { initializeGrid } from "../initialisation/initialiseGrid.js";
import { setFindNeighbour, setCellUpdateRule} from './optionSetter.js';
import { determineColorPalette } from '../draw/coloring.js';

export function addRandomnessCheckboxListener(globalData) {
    document.getElementById('randomnessCheckbox').addEventListener('change', function() {
        globalData.addRandomness = this.checked; // Set the variable to the checkbox's state
    });
}

export function addFullscreenButtonListener(globalData) {
    document.getElementById('fullscreenButton').addEventListener('click', function() {
        if (globalData.canvas.requestFullscreen) {
            globalData.canvas.requestFullscreen();
        } else if (globalData.canvas.mozRequestFullScreen) { // Firefox
            globalData.canvas.mozRequestFullScreen();
        } else if (globalData.canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
            globalData.canvas.webkitRequestFullscreen();
        } else if (globalData.canvas.msRequestFullscreen) { // IE/Edge
            globalData.canvas.msRequestFullscreen();
        }
    });
}

export function addMouseMoveListener(globalData) {
    globalData.canvas.addEventListener('mousemove', function(event) {
        if (event.shiftKey){
            var rect = globalData.canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
    
            // Calculate the size of each cell on the screen
            var cellScreenSizeX = rect.width / globalData.gridWidth;
            var cellScreenSizeY = rect.height / globalData.gridHeight;
    
            // Calculate the clicked cell
            var j = Math.floor(x / cellScreenSizeX);
            var i = Math.floor(y / cellScreenSizeY);

            globalData.grid.set(i, j, 1);
        }
    });
}

export function addMouseDownListener(globalData) {
    globalData.canvas.addEventListener('mousedown', function(event) {
        var rect = globalData.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Calculate the size of each cell on the screen
        var cellScreenSizeX = rect.width / globalData.gridWidth;
        var cellScreenSizeY = rect.height / globalData.gridHeight;

        // Calculate the clicked cell
        var j = Math.floor(x / cellScreenSizeX);
        var i = Math.floor(y / cellScreenSizeY);
        
        if (!event.shiftKey && !event.ctrlKey) {
            globalData.grid.set((i+1) % globalData.gridHeight, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set((i-1+globalData.gridHeight) % globalData.gridHeight, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set((i-1+globalData.gridHeight) % globalData.gridHeight, (j-1+globalData.gridWidth) % globalData.gridWidth, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, (j-1+globalData.gridWidth) % globalData.gridWidth, 1);
        } else if (event.shiftKey && !event.ctrlKey) {
            globalData.grid.set(i, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set(i, j, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, j, 1);
        } else if (!event.shiftKey && event.ctrlKey) {
            globalData.grid.set(i, j, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, j, 1);
        } else if (event.shiftKey && event.ctrlKey) {
            globalData.grid.set(i, j, 1);
            globalData.grid.set(i, (j+1) % globalData.gridWidth, 1);
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
        setFindNeighbour(globalData);
    });
    document.getElementById('userYShift').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.gridPeriodicityShiftY = value;
        setFindNeighbour(globalData);
    });
    document.getElementById('userFlipX').addEventListener('change', function() {
        globalData.gridFlipX = this.checked;
        setFindNeighbour(globalData);
    });
    document.getElementById('userFlipY').addEventListener('change', function() {
        globalData.gridFlipY = this.checked;
        setFindNeighbour(globalData);
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

export function addRuleListener(globalData) {
    document.getElementById('userRule').addEventListener('change', async function() {
        globalData.rule = this.value;
        if ((globalData.ruleOrder == 2) ^ (globalData.rule.includes("Secondary") || globalData.rule.includes("Variable"))){
            await initializeGrid(globalData)
        }
        globalData.ruleOrder = 1;
        if (globalData.rule.includes("Secondary") || globalData.rule.includes("Variable")){
            globalData.ruleOrder = 2;
        } else if (globalData.rule.includes("Tertiary")){
            globalData.ruleOrder = 3;
        }
        setCellUpdateRule(globalData);
    });
}

export function addColorPaletteListener(globalData) {
    document.getElementById('userColorPalette').addEventListener('change', function() {
        globalData.colorPalette = this.value;
        determineColorPalette(globalData);
    });
}

