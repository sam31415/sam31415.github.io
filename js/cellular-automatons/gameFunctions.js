
import { Grid } from './initialisation.js';
import { findNeighbourFlipY } from './neighbours.js';
import { findNeighbourNoFlip } from './neighbours.js';
import { findNeighbourFlipX } from './neighbours.js';
import { findNeighbourFlipXY } from './neighbours.js';
import { addRandomEvents } from './randomness.js';
import { updateCellValueTest, updateCellValueConway, updateCellValueBB, updateCellValueBBMod, updateCellValueBBTrace, updateCellValueBBTrace2, updateCellValueBBTrace3, updateCellValueBBTrace4, updateCellValueBBTrace5 } from './rules.js';

export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    setTimeout(function() {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}


function drawGrid(globalData) {
    let canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    // Draw a single large rectangle with the background color
    ctx.fillStyle = globalData.backgroundColor;
    ctx.fillRect(0, 0, globalData.gridWidth * globalData.cellSize, globalData.gridHeight * globalData.cellSize);

    // Only draw rectangles for the cells that are not zero
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            if (globalData.grid.get(i, j) == 1) {
                ctx.fillStyle = globalData.activatedColor;
            } else if (globalData.grid.get(i, j) == 2) {
                ctx.fillStyle = globalData.deadColor;
            } else if (globalData.grid.get(i, j) >= 3) {
                ctx.fillStyle = globalData.superActivatedColor;
            } else {
                continue;  // Skip cells that are zero
            }
            ctx.fillRect(i * globalData.cellSize, j * globalData.cellSize, globalData.cellSize, globalData.cellSize);
        }
    }
}


function updateGrid(globalData) {
    var findNeighbour;
    if (globalData.gridFlipX && globalData.gridFlipY) {
        findNeighbour = findNeighbourFlipXY;
    } else if (globalData.gridFlipX) {
        findNeighbour = findNeighbourFlipX;
    } else if (globalData.gridFlipY) {
        findNeighbour = findNeighbourFlipY;
    } else {
        findNeighbour = findNeighbourNoFlip;
    }
    var updateCellValue;
    if (globalData.rule == "Conway") {
        updateCellValue = updateCellValueConway;
    } else if (globalData.rule == "BB") {
        updateCellValue = updateCellValueBB;
    } else if (globalData.rule == "BBMod") {
        updateCellValue = updateCellValueBBMod;
    } else if (globalData.rule == "BBTrace") {
        updateCellValue = updateCellValueBBTrace;
    } else if (globalData.rule == "BBTrace2") {
        updateCellValue = updateCellValueBBTrace2;
    } else if (globalData.rule == "BBTrace3") {
        updateCellValue = updateCellValueBBTrace3;
    } else if (globalData.rule == "BBTrace4") {
        updateCellValue = updateCellValueBBTrace4;
    } else if (globalData.rule == "BBTrace5") {
        updateCellValue = updateCellValueBBTrace5;
    } else if (globalData.rule == "Test") {
        updateCellValue = updateCellValueTest;
    }
    var newGrid = new Grid(globalData.gridWidth, globalData.gridHeight);
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            var neighbors = 0;
            var sneighbors = 0;
            var dneighbors = 0;
            for (var di = -1; di <= 1; di++) {
                for (var dj = -1; dj <= 1; dj++) {
                    if (di == 0 && dj == 0) continue;
                    let neighbourCoord = findNeighbour(globalData, i, j, di, dj);
                    let ni = neighbourCoord[0];
                    let nj = neighbourCoord[1];
                    if (globalData.grid.get(ni, nj) == 1) {
                        neighbors += 1;
                        sneighbors += 1;
                    } else if (globalData.grid.get(ni, nj) == 2) {
                        dneighbors += 1;
                    }
                    else if (globalData.grid.get(ni, nj) == 3) {
                        sneighbors += 1;
                    }
                }
            }
            let cellValue = globalData.grid.get(i, j);
            var newCellValue = cellValue;
            newCellValue = updateCellValue(cellValue, newCellValue, neighbors, sneighbors, dneighbors);
            newGrid.set(i, j, newCellValue);
        }
    }
    if (globalData.addRandomness) {
        // Calculate the parameter for the Poisson distribution
        var { i, j } = addRandomEvents(globalData, i, j, newGrid, findNeighbour);
    }
    globalData.grid = newGrid;
}

