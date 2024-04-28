
import { BBColoring } from "./metaRules.js";


export function changeRule(globalData, forceChange = false) {
    if (Math.random() < globalData.ruleSwitchProbability || forceChange || globalData.changeColoringRuleFlag) {
        if (globalData.rule == "VariableGR") {
            globalData.ruleClass = new BBColoring(true);
            globalData.ruleClass2 = new BBColoring(true);
        } else if (globalData.rule == "Variable") {
            globalData.ruleClass = new BBColoring(true);
        } else if (globalData.rule == "VariableUnsafe") {
            globalData.ruleClass = new BBColoring(false);
        }
        globalData.ruleSwitchProbability = 0;
    }
    globalData.ruleSwitchProbability += 1 / (globalData.ruleSwitchPeriod ** 2);
    if (globalData.ruleSwitchProbability > 1) {
        globalData.ruleSwitchProbability = 1;
    }
    globalData.changeColoringRuleFlag = false;
}


