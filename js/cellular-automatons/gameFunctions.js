
import { Grid } from './initialisation.js';
import { addRandomEvents } from './randomness.js';
import { changeRule4Colors } from './rulesMeta.js';
import { changeRule3Colors } from './rulesMeta.js';
import { changeRule2Colors } from './rulesMeta.js';
import { driftColorPalette } from './coloring.js';
import { updatePeriodicityShiftAndTopology } from './optionSetter.js';

export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    if (globalData.rule == "Variable2Colors") {
        changeRule2Colors(globalData, false);
    } else if (globalData.rule == "Variable3Colors") {
        changeRule3Colors(globalData, false);
    } else if (globalData.rule == "Variable4Colors") {
        changeRule4Colors(globalData, false);
    } else if (globalData.rule == "VariableGR") {
        changeRule4Colors(globalData, false);
        changeRule4Colors(globalData, true);
    }
    if (globalData.rule.includes("Variable")) {
        updatePeriodicityShiftAndTopology(globalData);
    }
    if (globalData.colorPalette == "variable") {
        driftColorPalette(globalData);
    }
    setTimeout(function() {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}

export function drawBackground(globalData) {
    let canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    // Draw a single large rectangle with the background color
    ctx.fillStyle = globalData.backgroundColor;
    ctx.fillRect(0, 0, globalData.gridWidth * globalData.cellSize, globalData.gridHeight * globalData.cellSize);
}

function drawGrid(globalData) {
    let canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    // Only draw rectangles for the cells that are not zero
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            if (globalData.redraw.get(i, j) == 0) {
                continue;
            }
            if (globalData.ruleOrder == 2) {
                var value = Math.floor(globalData.grid.get(i, j) / 10)
            } else {
                var value = globalData.grid.get(i, j) % 10;
            }
            if (value == 0) {
                ctx.fillStyle = globalData.backgroundColor;
            } else if (value == 1) {
                ctx.fillStyle = globalData.activatedColor;
            } else if (value == 2) {
                ctx.fillStyle = globalData.deadColor;
            } else if (value >= 3) {
                ctx.fillStyle = globalData.superActivatedColor;
            } else {
                continue;
            }
            ctx.fillRect(i * globalData.cellSize, j * globalData.cellSize, globalData.cellSize, globalData.cellSize);
        }
    }
}

function updateGrid(globalData) {  
    var newGrid = new Grid(globalData.gridWidth, globalData.gridHeight);
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            var neighbors = 0;
            var sneighbors = 0;
            var dneighbors = 0;
            for (var di = -1; di <= 1; di++) {
                for (var dj = -1; dj <= 1; dj++) {
                    if (di == 0 && dj == 0) continue;
                    let neighbourCoord = globalData.findNeighbour(globalData, i, j, di, dj);
                    let ni = neighbourCoord[0];
                    let nj = neighbourCoord[1];
                    if (globalData.grid.get(ni, nj) % 10 == 1) {
                        neighbors += 1;
                        sneighbors += 1;
                    } else if (globalData.grid.get(ni, nj) % 10 == 2) {
                        dneighbors += 1;
                    }
                    else if (globalData.grid.get(ni, nj) % 10 == 3) {
                        sneighbors += 1;
                    }
                }
            }
            let cellValue = globalData.grid.get(i, j);
            var newCellValue = cellValue;
            var neighbor_list = [neighbors, sneighbors, dneighbors];
            if (globalData.rule != "VariableGR" || globalData.mask.get(i, j) == 0) {
                newCellValue = globalData.updateCellValue(cellValue, newCellValue, neighbor_list);
            } else {
                newCellValue = globalData.updateCellValueAuxiliary(cellValue, newCellValue, neighbor_list);
            }
            if (globalData.ruleOrder == 1) {
                if (newCellValue != cellValue) {
                    globalData.redraw.set(i, j, 1);
                } else {
                    globalData.redraw.set(i, j, 0);
                }
            } else if (globalData.ruleOrder == 2) {
                if (Math.floor(newCellValue / 10)  != Math.floor(cellValue / 10)) {
                    globalData.redraw.set(i, j, 1);
                } else {
                    globalData.redraw.set(i, j, 0);
                }
            }
            
            newGrid.set(i, j, newCellValue);
        }
    }
    if (globalData.addRandomness) {
        // Calculate the parameter for the Poisson distribution
        var { i, j } = addRandomEvents(globalData, i, j, newGrid, globalData.findNeighbour);
    }
    globalData.grid = newGrid;
}

