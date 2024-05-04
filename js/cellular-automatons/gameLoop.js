
import { changeRule } from "./rules/changeRule.js";
import { driftColorPalette } from './draw/coloring.js';
import { updatePeriodicityShiftAndTopology } from './interactivity/optionSetter.js';
import { drawGrid } from './draw/drawGrid.js';
import { updateGrid } from './updateGrid.js';

export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    changeRule(globalData)
    globalData.time = (globalData.time + 1) % 4;

    updatePeriodicityShiftAndTopology(globalData);
    
    if (globalData.colorPalette == "variable") {
        driftColorPalette(globalData);
    }
    setTimeout(function () {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}



