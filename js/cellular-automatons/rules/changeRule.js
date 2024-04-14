
import { ruleConditions } from "./conditions.js";
import { updateCellValueTertiary4ValuesMeta, updateCellValueSecondaryMeta } from "./rulesMeta.js";

function sampleCondition() {
    var randomIndex = Math.floor(Math.random() * ruleConditions.length);
    var randomNeighborType = Math.floor(Math.random() * 3);
    var randomEnableInactiveOnly = Math.floor(Math.random() * 3);
    var randomCondition = ruleConditions[randomIndex];
    return { conditionFunc: randomCondition, 
             neighborType: randomNeighborType, 
             enableInactiveOnly: randomEnableInactiveOnly,
             conditionName: `CI: ${randomIndex}, NT: ${randomNeighborType}, IO: ${randomEnableInactiveOnly}` };
}

export function changeRuleNColors(globalData, nColors, auxiliary = false, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
        var conditions = [];
        for (let i = 0; i < nColors - 1; i++) {
            conditions.push(sampleCondition());
        }
        var randomRule = updateCellValueSecondaryMeta(conditions);
        var ruleName = "Rule";
        if (auxiliary) {
            globalData.updateCellValueAuxiliary = randomRule;
            ruleName = "Auxiliary rule";
        } else {
            globalData.updateCellValue = randomRule;
        }
        var conditionNames = conditions.map(condition => condition.conditionName);
        var conditionNamesString = conditionNames.join(' | ');
        console.log(ruleName + "changed to " + conditionNamesString);
    }
}

export function changeTertiaryRule4Colors(globalData, auxiliary = false, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
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
    }
}

