
import { changeTertiaryRule4Colors } from "./rules/changeRule.js";
import { changeRuleNColors } from "./rules/changeRule.js";
import { driftColorPalette } from './draw/coloring.js';
import { updatePeriodicityShiftAndTopology } from './interactivity/optionSetter.js';
import { drawGrid } from './draw/drawGrid.js';
import { updateGrid } from './rules/updateGrid.js';

export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    if (globalData.rule == "Variable2Colors") {
        changeRuleNColors(globalData, 2, false, false);
    } else if (globalData.rule == "Variable3Colors") {
        changeRuleNColors(globalData, 3, false, false);
    } else if (globalData.rule == "Variable4Colors") {
        changeRuleNColors(globalData, 4, false, false);
    } else if (globalData.rule == "Tertiary4Colors" || globalData.rule == "TertiaryFancySpcshp") {
        changeTertiaryRule4Colors(globalData, false);
    } else if (globalData.rule == "VariableGR") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, false, false);
        nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, true, false);
    } else if (globalData.rule == "Variable") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, false, false);
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



