
import { PureBB, BBColoring, BBColoring2, Conway, SparseFourStates, TestSparseFourStates, METAPRESETSAFE, METAPRESETMIX, METAPRESETGENERAL, METAPRESETGR } from "./metaRules.js";

export function changeRule(globalData, forceChange = false) {
    if (Math.random() < Math.exp(globalData.ruleLogSwitchProbability) || forceChange || globalData.changeColoringRuleFlag) {
        if (globalData.rule == "VariableGR") {
            globalData.ruleClass = new BBColoring(METAPRESETGR);
            globalData.ruleClass2 = new BBColoring(METAPRESETGR);
        } else if (globalData.rule == "Variable") {
            globalData.ruleClass = new BBColoring(METAPRESETSAFE);
        } else if (globalData.rule == "VariableMix") {
            globalData.ruleClass = new BBColoring(METAPRESETMIX);
        } else if (globalData.rule == "VariableUnsafe") {
            globalData.ruleClass = new BBColoring(METAPRESETGENERAL);
        } else if (globalData.rule == "Variable2Unsafe") {
            globalData.ruleClass = new BBColoring2(METAPRESETGENERAL);
        } else if (globalData.rule == "CustomRule") {
            globalData.ruleClass = new BBColoring(null, null, globalData.tempRuleStorage);
        } else if (globalData.rule == "OriginalBB") {
            globalData.ruleClass = new PureBB("Original");
        } else if (globalData.rule == "ModifiedBB") {
            globalData.ruleClass = new PureBB("Modified");
        } else if (globalData.rule == "StarWars") {
            globalData.ruleClass = new PureBB("StarWars");
        } else if (globalData.rule == "Conway") {
            globalData.ruleClass = new PureBB("Conway");
        } else if (globalData.rule == "SparseFourStates") {
            //globalData.ruleClass = new Conway("safe");
            globalData.ruleClass = new SparseFourStates();
            //globalData.ruleClass = new TestSparseFourStates();
        }
        globalData.ruleLogSwitchProbability = -25;
        globalData.ruleLogEvolveProbability = -25;
        globalData.changeColoringRuleFlag = false;
        displayRule(globalData);
    } else if ((Math.random() < Math.exp(globalData.ruleLogEvolveProbability) || globalData.evolveColoringRuleFlag) && globalData.rule != "CustomRule") {
        globalData.ruleClass.evolveRuleChain();
        if (globalData.rule == "VariableGR") {
            globalData.ruleClass2.evolveRuleChain();
        }
        globalData.ruleLogEvolveProbability = -25;
        globalData.evolveColoringRuleFlag = false;
        displayRule(globalData);
    }
    globalData.ruleLogSwitchProbability = globalData.ruleLogSwitchProbability + globalData.logMultiplicativeFactor;
    if (globalData.ruleLogSwitchProbability > 0) {
        globalData.ruleLogSwitchProbability = 0;
    }
    globalData.ruleLogEvolveProbability = globalData.ruleLogEvolveProbability + globalData.logMultiplicativeEvolveFactor;
    if (globalData.ruleLogEvolveProbability > 0) {
        globalData.ruleLogEvolveProbability = 0;
    }
}

function displayRule(globalData) {
    var element = document.getElementById('currentRule');
    if (element) {
        element.value = globalData.ruleClass.getName();
    }}


