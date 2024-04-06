import { onLoad } from './onLoad.js';

console.log("Loading main.js")

var canvas = document.getElementById('gameCanvas');

let globalData = {
    gridHeight: 200,
    gridWidth: 200,
    timeout: 20,
    grid: null,
    redraw: null,
    cellSize: null,  // We'll compute this later
    addRandomness: true,
    randomnessAmount: -6.0,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'black2',
    rule: "VariableGR",
    initialisation: "random",
    ruleOrder: 2,
    updateCellValue: null,
    updateCellValueAuxiliary:null,
    findNeighbour: null,
    mask: null,
};

// Compute cellSize based on gridWidth
globalData.cellSize = canvas.width / globalData.gridWidth;

window.onload = function() {
    onLoad(globalData, canvas);
}








