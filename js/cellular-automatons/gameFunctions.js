
import { Grid } from './initialisation.js';
import { addRandomEvents } from './randomness.js';
import { updateCellValueSecondary2ValuesMeta } from './rules.js';

export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    if (globalData.rule == "Variable2Colors"){
        changeRule2Colors(globalData);
    }
    setTimeout(function() {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}

function conditionNeighborEq(nvalue) {
    function conditionNeighborEqValue(neighbors) {
        return neighbors == nvalue;
    }
    return conditionNeighborEqValue;
}
function conditionNeighborBigger(nvalue) {
    function conditionNeighborBiggerValue(neighbors) {
        return neighbors > nvalue;
    }
    return conditionNeighborBiggerValue;
}
var values = [0, 1, 2, 3]
var ruleConditionsEq = values.map(value => conditionNeighborEq(value))
var ruleConditionsBigger = values.map(value => conditionNeighborBigger(value))
var ruleConditions = ruleConditionsEq.concat(ruleConditionsBigger)

export function changeRule2Colors(globalData, forceChange = false) {
    if (Math.random() < 0.001 || forceChange) {
        var randomIndex = Math.floor(Math.random() * ruleConditions.length)
        var randomCondition = ruleConditions[randomIndex];
        var randomRule = updateCellValueSecondary2ValuesMeta(randomCondition);
        globalData.updateCellValue = randomRule;
        console.log("Rule changed to rule " + randomIndex)
    }
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
            if (globalData.secondary) {
                var value = Math.floor(globalData.grid.get(i, j) / 10)
            } else {
                var value = globalData.grid.get(i, j) % 10;
            }
            if (value == 1) {
                ctx.fillStyle = globalData.activatedColor;
            } else if (value == 2) {
                ctx.fillStyle = globalData.deadColor;
            } else if (value >= 3) {
                ctx.fillStyle = globalData.superActivatedColor;
            } else {
                continue;  // Skip cells that are zero
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
            var neighbor_list = [neighbors, sneighbors, dneighbors]
            newCellValue = globalData.updateCellValue(cellValue, newCellValue, neighbor_list);
            newGrid.set(i, j, newCellValue);
        }
    }
    if (globalData.addRandomness) {
        // Calculate the parameter for the Poisson distribution
        var { i, j } = addRandomEvents(globalData, i, j, newGrid, globalData.findNeighbour);
    }
    globalData.grid = newGrid;
}

