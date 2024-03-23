import { gameLoop } from '../../../js/cellular-automatons/gameFunctions.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation.js";
import { determineColorPalette, addFullscreenButtonListener, addSubmitListener } from './eventHandlers.js';
import { retrieveGlobalData } from './formHandlers.js';

console.log("Loading aw2.js")

var canvas = document.getElementById('gameCanvas');

let globalData = {
    gridHeight: 300,
    gridWidth: 300,
    timeout: 30,
    grid: null,
    cellSize: null,  // We'll compute this later
    addRandomness: false,
    randomnessAmount: -5.0,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'blackTrace1',
    rule: "BBTrace2",
    initialisation: "random",
};

// Compute cellSize based on gridWidth
globalData.cellSize = canvas.width / globalData.gridWidth;

window.onload = function() {
    onLoad(globalData, canvas);
}


function onLoad(globalData, canvas) {
    addFullscreenButtonListener(canvas);
    addSubmitListener(globalData);

    retrieveGlobalData(globalData, canvas);
    determineColorPalette(globalData);

    initializeGrid(globalData);
    gameLoop(globalData);

    
}