import { Grid } from "../classes/grid.js";
import { addRandomEvents } from './randomness.js';


export function updateGrid(globalData) {
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
                if (Math.floor(newCellValue / 4) != Math.floor(cellValue / 4)) {
                    globalData.redraw.set(i, j, 1);
                } else {
                    globalData.redraw.set(i, j, 0);
                }
            } else if (globalData.ruleOrder == 3) {
                if (Math.floor(newCellValue / 16) != Math.floor(cellValue / 16)) {
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