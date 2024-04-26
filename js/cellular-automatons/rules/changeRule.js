
import { Condition } from "./conditions.js";
import { updateCellValueTertiary4ValuesMeta, updateCellValueSecondaryMeta, updateCellValueTertiaryMeta } from "./rulesMeta.js";
import { randomTwoStateRuleFunction, twoStateNoZeroRuleStringToFunction, twoStatePlusDeadRuleStringToFunction } from "./twoStateRules.js";
import { BBRuleNoZero } from "./rules.js";


export function changeRule(globalData) {
    if (globalData.rule == "Variable2Colors") {
        changeRuleNColors(globalData, 2, false, globalData.changeColoringRuleFlag);
    } else if (globalData.rule == "Variable3Colors") {
        changeRuleNColors(globalData, 3, false, globalData.changeColoringRuleFlag);
    } else if (globalData.rule == "Variable4Colors") {
        changeRuleNColors(globalData, 4, false, globalData.changeColoringRuleFlag);
    } else if (globalData.rule == "Tertiary4Colors" || globalData.rule == "TertiaryFancySpcshp") {
        changeTertiaryRule4Colors(globalData, globalData.changeColoringRuleFlag);
    } else if (globalData.rule == "VariableGR") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, false, globalData.changeColoringRuleFlag);
        nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, true, globalData.changeColoringRuleFlag);
    } else if (globalData.rule == "Variable") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, false, globalData.changeColoringRuleFlag);
    } else if (globalData.rule == "VariableUnsafe") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, false, globalData.changeColoringRuleFlag, 0.0, false, false);
    } else if (globalData.rule == "VariableSecAutomata") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleNColors(globalData, nColors, false, globalData.changeColoringRuleFlag, 1.0);
    } else if (globalData.rule == "TertiaryAutomata") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleTertiaryNColors(globalData, nColors, false, globalData.changeColoringRuleFlag, 1.0);
    }  else if (globalData.rule == "TertiaryGood") {
        var nColors = Math.floor(Math.random() * globalData.maxNColors) + 2;
        changeRuleTertiaryNColors(globalData, nColors, false, globalData.changeColoringRuleFlag, 0.5, true);
    } 
    globalData.ruleSwitchProbability += 1 / (globalData.ruleSwitchPeriod ** 2);
    if (globalData.ruleSwitchProbability > 1) {
        globalData.ruleSwitchProbability = 1;
    }
    globalData.changeColoringRuleFlag = false;
}

function sampleSecondaryRule(nColors = 4, secondaryAutomatonFraction = 0.0, onlyGoodSecondary = false, safe = true) {
    var primaryRule = BBRuleNoZero // twoStatePlusDeadRuleStringToFunction("B13456S236") // twoStateNoZeroRuleStringToFunction("B23456S238") // 
    var primaryRuleString = "BBRuleNoZero" // "B13456S236" // "B23456S238" //
    var useDeadCells = Math.random() < 0.5;
    var secondaryRuleString;
    var secondaryRule
    [secondaryRuleString, secondaryRule] = randomTwoStateRuleFunction(useDeadCells, onlyGoodSecondary);
    //secondaryRuleString = "B235678S24578"
    //secondaryRule = twoStateRuleStringToFunction(secondaryRuleString);
    var modulo = (Math.floor(Math.random() * 12) + 4) * 4;
    var secondaryRuleEnabled = Math.random() < secondaryAutomatonFraction;
    var neighborType = null
    if (safe) {
        neighborType = Math.floor(Math.random() * 3);
    }
    var conditions = [];
        for (let i = 0; i < nColors - 1; i++) {
            conditions.push(Condition.randomSample(neighborType));
        }
    return { primaryRuleString: primaryRuleString,
             primaryRule: primaryRule,
             secondaryRuleSString: secondaryRuleString, 
             secondaryRule: secondaryRule,
             secondaryRuleEnabled: secondaryRuleEnabled,
             modulo: modulo,
             conditions: conditions};
}

export function changeRuleNColors(globalData, nColors, auxiliary = false, forceChange = false, secondaryAutomatonFraction = 0.0, onlyGoodSecondary = false, safe = true) {
    if (Math.random() < globalData.ruleSwitchProbability || forceChange) {
        var ruleDefinition = sampleSecondaryRule(nColors, secondaryAutomatonFraction, onlyGoodSecondary, safe=safe)
        var randomRule = updateCellValueSecondaryMeta(ruleDefinition);
        var ruleName = "Rule";
        if (auxiliary) {
            globalData.updateCellValueAuxiliary = randomRule;
            ruleName = "Auxiliary rule";
        } else {
            globalData.updateCellValue = randomRule;
        }
        logRuleDefinition(ruleName, ruleDefinition, nColors);
        globalData.ruleSwitchProbability = 0;

        // Add the rule information to globalData
        globalData.ruleDefinition = ruleDefinition;
    }
}


export function changeRuleTertiaryNColors(globalData, nColors, auxiliary = false, forceChange = false, secondaryAutomatonFraction = 0.0, onlyGoodSecondary = false, safe = true) {
    if (Math.random() < globalData.ruleSwitchProbability || forceChange) {
        var ruleDefinition = sampleSecondaryRule(nColors, secondaryAutomatonFraction, onlyGoodSecondary, safe=safe)
        var randomRule = updateCellValueTertiaryMeta(ruleDefinition);
        var ruleName = "Rule";
        if (auxiliary) {
            globalData.updateCellValueAuxiliary = randomRule;
            ruleName = "Auxiliary rule";
        } else {
            globalData.updateCellValue = randomRule;
        }
        logRuleDefinition(ruleName, ruleDefinition, nColors);
        globalData.ruleSwitchProbability = 0;

        // Add the rule information to globalData
        globalData.ruleDefinition = ruleDefinition;
    }
}

function logRuleDefinition(ruleName, ruleDefinition, nColors) {
    var conditionNames = ruleDefinition.conditions.map(condition => condition.name());
    var conditionNamesString = conditionNames.join(' | ');
    console.log(ruleName + " changed to:");
    if (ruleDefinition.secondaryRuleEnabled) {
        console.log("  - " + ruleDefinition.secondaryRuleSString + " ntype " + ruleDefinition.neighborType + " modulo " + ruleDefinition.modulo)
    }
    console.log("  - " + nColors + " colors " + conditionNamesString);
}

export function changeTertiaryRule4Colors(globalData, auxiliary = false, forceChange = false) {
    if (Math.random() < globalData.ruleSwitchProbability || forceChange) {
        var randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType1 = Math.floor(Math.random() * 3);
        var randomEnableInactiveOnly1 = Math.floor(Math.random() * 3);
        var randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType2 = Math.floor(Math.random() * 3);
        var randomEnableInactiveOnly2 = Math.floor(Math.random() * 3);
        var randomIndex3 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType3 = Math.floor(Math.random() * 3);
        var randomEnableInactiveOnly3 = Math.floor(Math.random() * 3);
        randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
        randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        randomIndex3 = Math.floor(Math.random() * ruleConditions.length);
        var ruleCondition1 = ruleConditions[randomIndex1];
        var ruleCondition2 = ruleConditions[randomIndex2];
        var ruleCondition3 = ruleConditions[randomIndex3];

        var randomIndex4 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType4 = Math.floor(Math.random() * 4) + 3;
        var randomEnableInactiveOnly4 = Math.floor(Math.random() * 3);
        var randomIndex5 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType5 = Math.floor(Math.random() * 4) + 3;
        var randomEnableInactiveOnly5 = Math.floor(Math.random() * 3);
        var randomIndex6 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType6 = Math.floor(Math.random() * 4) + 3;
        var randomEnableInactiveOnly6 = Math.floor(Math.random() * 3);
        randomIndex4 = Math.floor(Math.random() * ruleConditions.length);
        randomIndex5 = Math.floor(Math.random() * ruleConditions.length);
        randomIndex6 = Math.floor(Math.random() * ruleConditions.length);
        var ruleCondition4 = ruleConditions[randomIndex4];
        var ruleCondition5 = ruleConditions[randomIndex5];
        var ruleCondition6 = ruleConditions[randomIndex6];

        var flavour = 0;
        if (globalData.rule == "TertiaryFancySpcshp") {
            flavour = 1;
        }

        var randomRule = updateCellValueTertiary4ValuesMeta(
            ruleCondition1, randomNeighborType1, randomEnableInactiveOnly1,
            ruleCondition2, randomNeighborType2, randomEnableInactiveOnly2,
            ruleCondition3, randomNeighborType3, randomEnableInactiveOnly3,
            ruleCondition4, randomNeighborType4, randomEnableInactiveOnly4,
            ruleCondition5, randomNeighborType5, randomEnableInactiveOnly5,
            ruleCondition6, randomNeighborType6, randomEnableInactiveOnly6,
            flavour = flavour);

        var ruleName = "Rule";
        if (auxiliary) {
            globalData.updateCellValueAuxiliary = randomRule;
            ruleName = "Auxiliary rule";
        } else {
            globalData.updateCellValue = randomRule;
        }
        console.log(ruleName + "changed to rule (" +
            randomIndex1 + "-" + randomNeighborType1 + "-" + randomEnableInactiveOnly1 + ", " +
            randomIndex2 + "-" + randomNeighborType2 + "-" + randomEnableInactiveOnly2 + ", " +
            randomIndex3 + "-" + randomNeighborType3 + "-" + randomEnableInactiveOnly3 + ", " +
            randomIndex4 + "-" + randomNeighborType4 + "-" + randomEnableInactiveOnly4 + ", " +
            randomIndex5 + "-" + randomNeighborType5 + "-" + randomEnableInactiveOnly5 + ", " +
            randomIndex6 + "-" + randomNeighborType6 + "-" + randomEnableInactiveOnly6 + ")");
        globalData.ruleSwitchProbability = 0;

    }
}

