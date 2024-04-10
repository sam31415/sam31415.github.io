
import { Grid } from './initialisation.js';
import { addRandomEvents } from './randomness.js';
import { changeRule4Colors, changeRule3Colors, changeRule2Colors, changeTertiaryRule4Colors } from './rulesMeta.js';
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
    } else if (globalData.rule == "Tertiary4Colors" || globalData.rule == "TertiaryFancySpcshp") {
        changeTertiaryRule4Colors(globalData, false);
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


function drawGrid(globalData) {
    let canvas = globalData.canvas; //document.getElementById('gameCanvas');
    let ctx = globalData.ctx; //canvas.getContext('2d');
    let imageData = globalData.imageData;

    // Only draw rectangles for the cells that are not zero
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            if (globalData.redraw.get(i, j) == 0) {
                continue;
            }
            if (globalData.ruleOrder == 2) {
                var value = Math.floor(globalData.grid.get(i, j) / 4);
            } else if (globalData.ruleOrder == 3) {
                var value = Math.floor((globalData.grid.get(i, j)) / 16);
            } else {
                var value = globalData.grid.get(i, j) % 4;
            }
            let color;
            if (value == 0) {
                color = globalData.backgroundColor;
            } else if (value == 1) {
                color = globalData.activatedColor;
            } else if (value == 2) {
                color = globalData.deadColor;
            } else if (value >= 3) {
                color = globalData.superActivatedColor;
            } else {
                continue;
            }
            let index = (i * globalData.gridWidth + j) * 4;
            imageData.data[index + 0] = color.r;  // Red
            imageData.data[index + 1] = color.g;  // Green
            imageData.data[index + 2] = color.b;  // Blue
            imageData.data[index + 3] = 255;  // Alpha (255 = fully opaque)
        }
    }
    ctx.putImageData(imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}

function updateGrid(globalData) {  
    var newGrid = new Grid(globalData.gridWidth, globalData.gridHeight);
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            var neighbors = 0;
            var sneighbors = 0;
            var dneighbors = 0;
            var neighborsAux0 = 0;
            var neighborsAux1 = 0;
            var neighborsAux2 = 0;
            var neighborsAux3 = 0;
            for (var di = -1; di <= 1; di++) {
                for (var dj = -1; dj <= 1; dj++) {
                    if (di == 0 && dj == 0) continue;
                    let neighbourCoord = globalData.findNeighbour(globalData, i, j, di, dj);
                    let ni = neighbourCoord[0];
                    let nj = neighbourCoord[1];
                    if (globalData.grid.get(ni, nj) % 4 == 1) {
                        neighbors += 1;
                        sneighbors += 1;
                    } else if (globalData.grid.get(ni, nj) % 4 == 2) {
                        dneighbors += 1;
                    } else if (globalData.grid.get(ni, nj) % 4 == 3) {
                        sneighbors += 1;
                    }
                    if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 0) {
                        neighborsAux0 += 1;
                    } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 1) {
                        neighborsAux1 += 1;
                    } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 2) {
                        neighborsAux2 += 1;
                    } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 3) {
                        neighborsAux3 += 1;
                    }
                }
            }
            let cellValue = globalData.grid.get(i, j);
            var newCellValue = cellValue;
            var neighbor_list = [neighbors, sneighbors, dneighbors, neighborsAux0, neighborsAux1, neighborsAux2, neighborsAux3];
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
                if (Math.floor(newCellValue / 4)  != Math.floor(cellValue / 4)) {
                    globalData.redraw.set(i, j, 1);
                } else {
                    globalData.redraw.set(i, j, 0);
                }
            } else if (globalData.ruleOrder == 3) {
                if (Math.floor(newCellValue / 16)  != Math.floor(cellValue / 16)) {
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

