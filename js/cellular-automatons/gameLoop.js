
import { changeRule } from "./rules/changeRule.js";
import { driftColorPalette } from './draw/coloring.js';
import { updatePeriodicityShiftAndTopology } from './interactivity/optionSetter.js';
import { drawGrid } from './draw/drawGrid.js';
import { updateGrid } from './rules/updateGrid.js';

export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    changeRule(globalData)

    if (globalData.rule.includes("Variable")) {
        updatePeriodicityShiftAndTopology(globalData);
    }
    if (globalData.colorPalette == "variable") {
        driftColorPalette(globalData);
    }
    setTimeout(function () {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}



