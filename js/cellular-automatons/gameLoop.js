
import { changeTertiaryRule4Colors } from "./rules/changeRule.js";
import { changeRule4Colors } from "./rules/changeRule.js";
import { changeRule3Colors } from "./rules/changeRule.js";
import { changeRule2Colors } from "./rules/changeRule.js";
import { driftColorPalette } from './draw/coloring.js';
import { updatePeriodicityShiftAndTopology } from './interactivity/optionSetter.js';
import { drawGrid } from './draw/drawGrid.js';
import { updateGrid } from './rules/updateGrid.js';

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
    setTimeout(function () {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}



