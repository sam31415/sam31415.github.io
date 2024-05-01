
import { BBColoring, SparseFourStates, TestSparseFourStates } from "./metaRules.js";


export function changeRule(globalData, forceChange = false) {
    if (Math.random() < globalData.ruleSwitchProbability || forceChange || globalData.changeColoringRuleFlag) {
        if (globalData.rule == "VariableGR") {
            globalData.ruleClass = new BBColoring("safe");
            globalData.ruleClass2 = new BBColoring("safe");
        } else if (globalData.rule == "Variable") {
            globalData.ruleClass = new BBColoring("safe");
        } else if (globalData.rule == "VariableMix") {
            globalData.ruleClass = new BBColoring("mix");
        } else if (globalData.rule == "VariableUnsafe") {
            globalData.ruleClass = new BBColoring("general");
        } else if (globalData.rule == "SparseFourStates") {
            globalData.ruleClass = new SparseFourStates();
            //globalData.ruleClass = new TestSparseFourStates();
        }
        globalData.ruleSwitchProbability = 0;
    }
    globalData.ruleSwitchProbability += 1 / (globalData.ruleSwitchPeriod ** 2);
    if (globalData.ruleSwitchProbability > 1) {
        globalData.ruleSwitchProbability = 1;
    }
    globalData.changeColoringRuleFlag = false;
}


