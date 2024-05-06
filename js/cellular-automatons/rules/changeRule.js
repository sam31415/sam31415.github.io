
import { BBColoring, Conway, SparseFourStates, TestSparseFourStates, METAPRESETSAFE, METAPRESETMIX, METAPRESETGENERAL } from "./metaRules.js";

export function changeRule(globalData, forceChange = false) {
    if (Math.random() < Math.exp(globalData.ruleLogSwitchProbability) || forceChange || globalData.changeColoringRuleFlag) {
        if (globalData.rule == "VariableGR") {
            globalData.ruleClass = new BBColoring(METAPRESETSAFE);
            globalData.ruleClass2 = new BBColoring(METAPRESETSAFE);
        } else if (globalData.rule == "Variable") {
            globalData.ruleClass = new BBColoring(METAPRESETSAFE);
        } else if (globalData.rule == "VariableMix") {
            globalData.ruleClass = new BBColoring(METAPRESETMIX);
        } else if (globalData.rule == "VariableUnsafe") {
            globalData.ruleClass = new BBColoring(METAPRESETGENERAL);
        } else if (globalData.rule == "SparseFourStates") {
            //globalData.ruleClass = new Conway("safe");
            globalData.ruleClass = new SparseFourStates();
            //globalData.ruleClass = new TestSparseFourStates();
        }
        globalData.ruleLogSwitchProbability = -25;
        globalData.ruleLogEvolveProbability = -25;
    } else if (Math.random() < Math.exp(globalData.ruleLogEvolveProbability)) {
        globalData.ruleClass.evolveRuleChain();
        globalData.ruleLogEvolveProbability = -25;
    }
    globalData.ruleLogSwitchProbability = globalData.ruleLogSwitchProbability + globalData.logMultiplicativeFactor;
    if (globalData.ruleLogSwitchProbability > 0) {
        globalData.ruleLogSwitchProbability = 0;
    }
    globalData.ruleLogEvolveProbability = globalData.ruleLogEvolveProbability + globalData.logMultiplicativeEvolveFactor;
    if (globalData.ruleLogEvolveProbability > 0) {
        globalData.ruleLogEvolveProbability = 0;
    }
    globalData.changeColoringRuleFlag = false;
}


