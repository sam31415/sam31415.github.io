import { onLoad } from '../../js/cellular-automatons/onLoad.js';

console.log("Loading main.js")

var canvas = document.getElementById('gameCanvas');

let globalData = {
    gridHeight: 100,
    gridWidth: 100,
    timeout: 50,
    grid: null,
    cellSize: null,  // We'll compute this later
    addRandomness: true,
    randomnessAmount: -5.0,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'blue',
    rule: "BBMod",
    initialisation: "gr",
};

// Compute cellSize based on gridWidth
globalData.cellSize = canvas.width / globalData.gridWidth;

window.onload = function() {
    onLoad(globalData, canvas);
}







