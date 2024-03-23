import { submitValue, updateRandomnessValue } from './formHandlers.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation.js";
import { determineColorPalette, setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/optionSetter.js';
import { changeRule2Colors, changeRule3Colors, changeRule4Colors } from '../../../js/cellular-automatons/gameFunctions.js';

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

            globalData.grid.set(i, j, 1);
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
    setFindNeighbour(globalData);

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
        if (globalData.secondary != (globalData.rule.includes("Secondary") || globalData.rule.includes("Variable"))){
            await initializeGrid(globalData)
        }
        globalData.secondary = globalData.rule.includes("Secondary") || globalData.rule.includes("Variable")
        setCellUpdateRule(globalData);
        if (globalData.rule == "Variable2Colors"){
            changeRule2Colors(globalData, true);
        } else if (globalData.rule == "Variable3Colors"){
            changeRule3Colors(globalData, true);
        } else if (globalData.rule == "Variable4Colors"){
            changeRule4Colors(globalData, true);
        }
    });
}

export function addColorPaletteListener(globalData) {
    document.getElementById('userColorPalette').addEventListener('change', function() {
        globalData.colorPalette = this.value;
        determineColorPalette(globalData);
    });
}

