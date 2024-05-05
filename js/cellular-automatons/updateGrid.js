import { Grid } from "./classes/grid.js";
import { addRandomEvents } from './randomness/randomness.js';
import { computeNeighbourList, neighbourTypeNumbers } from "./neighbours/neighbourCount.js";


export function updateGrid(globalData) {
    var neighbours = [new Array(neighbourTypeNumbers[0]).fill(0), new Array(neighbourTypeNumbers[1]).fill(0)];
    var maskVariables = [0, 0, 0, 0, 0];
    var newGrid = new Grid(globalData.gridWidth, globalData.gridHeight);
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            var neighbourList = computeNeighbourList(globalData, i, j, neighbours, maskVariables);
            let cellValue = globalData.grid.get(i, j);
            var newCellValue = cellValue;
            if (globalData.rule != "VariableGR" || globalData.mask.get(i, j) == 0) {
                newCellValue = globalData.ruleClass.updateRule(cellValue, newCellValue, neighbourList, globalData.time);
            } else {
                newCellValue = globalData.ruleClass2.updateRule(cellValue, newCellValue, neighbourList, globalData.time);
            }

            if (Math.floor(newCellValue / globalData.ruleClass.colorUnit) % 4 != Math.floor(cellValue / globalData.ruleClass.colorUnit) % 4) {
                globalData.redraw.set(i, j, 1);
            } else {
                globalData.redraw.set(i, j, 0);
            }

            newGrid.set(i, j, newCellValue);
            // Reinitalize the neighbour and mask arrays to reuse them
            for (let i = 0; i < neighbours.length; i++) {
                neighbours[i].fill(0);
            }
            maskVariables.fill(0);
        }
    }
    if (globalData.addRandomness) {
        // Calculate the parameter for the Poisson distribution
        var { i, j } = addRandomEvents(globalData, i, j, newGrid, globalData.findNeighbour);
    }
    globalData.grid = newGrid;
}
