import { BBRuleNoZero } from "./rules.js";


function conditionNeighborEq(nvalue) {
    function conditionNeighborEqValue(neighbors) {
        return neighbors == nvalue;
    }
    return conditionNeighborEqValue;
}
function conditionNeighborBigger(value) {
    function conditionNeighborBiggerValue(neighbors) {
        return neighbors > value;
    }
    return conditionNeighborBiggerValue;
}
function conditionInactive(variation) {
    function conditionInactiveCondFunction(cellValue) {
        return cellValue == 0;
    }
    function conditionInactiveAbsFunction(cellValue) {
        return cellValue % 10 == 0;
    }
    function noCondition(cellValue) {
        return true;
    }
    if (variation == 0) {
        return conditionInactiveCondFunction;
    } else if (variation == 1) {
        return conditionInactiveAbsFunction;
    } else {
        return noCondition;
    }
}

var valuesEq = [1, 2, 3];
var ruleConditionsEq = valuesEq.map(value => conditionNeighborEq(value));
var valuesBigger = [0, 1, 2, 3];
var ruleConditionsBigger = valuesBigger.map(value => conditionNeighborBigger(value));
var ruleConditions = ruleConditionsEq.concat(ruleConditionsBigger);

// To try to avoid rules with less colors, but in the end not used.
function testConditionCompatibility(conditionIndex1, conditionIndex2) {
    if (conditionIndex1 == conditionIndex2){
        return false;
    }
    if (conditionIndex1 < 3 && conditionIndex2 >= 3 && conditionIndex2 - 3 < conditionIndex1) {
        return false;
    }
    if (conditionIndex1 >= 3 && conditionIndex2 >= 3 && conditionIndex1 < conditionIndex2) {
        return false;
    }
    return true;
}

// Meta update rule depending on a condition, for 2 color rules.

export function updateCellValueSecondary2ValuesMeta(conditionFunc, neighbor_type, enableInactiveOnly) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        if (conditionFunc(neighbor_list[neighbor_type]) && conditionInactive(enableInactiveOnly)(cellValue)) {
            newCellValue = (newCellValue + 10) % 20;
        }
        return newCellValue;
    }

    return updateRule;
}// Meta update rule depending on two conditions, for 3 color rules.

export function updateCellValueSecondary3ValuesMeta(
    conditionFunc1, neighbor_type1, enableInactiveOnly1,
    conditionFunc2, neighbor_type2, enableInactiveOnly2) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        if (conditionFunc1(neighbor_list[neighbor_type1]) && conditionInactive(enableInactiveOnly1)(cellValue)) {
            newCellValue = (newCellValue + 10) % 30;
        } else if (conditionFunc2(neighbor_list[neighbor_type2]) && conditionInactive(enableInactiveOnly2)(cellValue)) {
            newCellValue = (newCellValue + 20) % 30;
        }
        return newCellValue;
    }

    return updateRule;
}
// Meta update rule depending on three conditions, for 4 color rules.

export function updateCellValueSecondary4ValuesMeta(
    conditionFunc1, neighbor_type1, enableInactiveOnly1, 
    conditionFunc2, neighbor_type2, enableInactiveOnly2, 
    conditionFunc3, neighbor_type3, enableInactiveOnly3) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        if (conditionFunc1(neighbor_list[neighbor_type1]) && conditionInactive(enableInactiveOnly1)(cellValue)) {
            newCellValue = (newCellValue + 10) % 40;
        } else if (conditionFunc2(neighbor_list[neighbor_type2]) && conditionInactive(enableInactiveOnly2)(cellValue)) {
            newCellValue = (newCellValue + 20) % 40;
        } else if (conditionFunc3(neighbor_list[neighbor_type3]) && conditionInactive(enableInactiveOnly3)(cellValue)) {
            newCellValue = (newCellValue + 30) % 40;
        }
        return newCellValue;
    }

    return updateRule;
}

export function updateCellValueTertiary4ValuesMeta(
    conditionFunc1, neighbor_type1, enableInactiveOnly1, 
    conditionFunc2, neighbor_type2, enableInactiveOnly2, 
    conditionFunc3, neighbor_type3, enableInactiveOnly3,
    conditionFunc4, neighbor_type4, enableInactiveOnly4, 
    conditionFunc5, neighbor_type5, enableInactiveOnly5, 
    conditionFunc6, neighbor_type6, enableInactiveOnly6) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        // if (conditionFunc1(neighbor_list[neighbor_type1]) && conditionInactive(enableInactiveOnly1)(cellValue)) {
        //     newCellValue = (newCellValue + 10) % 40;
        // } else if (conditionFunc2(neighbor_list[neighbor_type2]) && conditionInactive(enableInactiveOnly2)(cellValue)) {
        //     newCellValue = (newCellValue + 20) % 40;
        // } else if (conditionFunc3(neighbor_list[neighbor_type3]) && conditionInactive(enableInactiveOnly3)(cellValue)) {
        //     newCellValue = (newCellValue + 30) % 40;
        // }
        // if (conditionFunc4(neighbor_list[neighbor_type4]) && conditionInactive(enableInactiveOnly4)(cellValue)) {
        //     newCellValue = (newCellValue + 100) % 400;
        // } else if (conditionFunc5(neighbor_list[neighbor_type5]) && conditionInactive(enableInactiveOnly5)(cellValue)) {
        //     newCellValue = (newCellValue + 200) % 400;
        // } else if (conditionFunc6(neighbor_list[neighbor_type6]) && conditionInactive(enableInactiveOnly6)(cellValue)) {
        //     newCellValue = (newCellValue + 300) % 400;
        // }
        return newCellValue;
    }

    return updateRule;
}

export function changeRule2Colors(globalData, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
        var randomIndex = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType = Math.floor(Math.random() * 3);
        var randomEnableInactiveOnly = Math.floor(Math.random() * 3);
        var randomCondition = ruleConditions[randomIndex];
        var randomRule = updateCellValueSecondary2ValuesMeta(randomCondition, randomNeighborType, randomEnableInactiveOnly);
        globalData.updateCellValue = randomRule;
        console.log("Rule changed to rule " + randomIndex + "-" + randomNeighborType + "-" + randomEnableInactiveOnly);
    }
}
export function changeRule3Colors(globalData, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
        var randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType1 = Math.floor(Math.random() * 3);
        var randomEnableInactiveOnly1 = Math.floor(Math.random() * 3);
        var randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType2 = Math.floor(Math.random() * 3);
        var randomEnableInactiveOnly2 = Math.floor(Math.random() * 3);
        randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
        randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        var ruleCondition1 = ruleConditions[randomIndex1];
        var ruleCondition2 = ruleConditions[randomIndex2];
        var randomRule = updateCellValueSecondary3ValuesMeta(
            ruleCondition1, randomNeighborType1, randomEnableInactiveOnly1,
            ruleCondition2, randomNeighborType2, randomEnableInactiveOnly2);
        globalData.updateCellValue = randomRule;
        console.log("Rule changed to rule (" + 
                    randomIndex1 + "-" + randomNeighborType1 + "-" + randomEnableInactiveOnly1 + ", " + 
                    randomIndex2 + "-" + randomNeighborType2 + "-" + randomEnableInactiveOnly2 + ")");
    }
}
export function changeRule4Colors(globalData, auxiliary = false, forceChange = false) {
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
        var randomRule = updateCellValueSecondary4ValuesMeta(
            ruleCondition1, randomNeighborType1, randomEnableInactiveOnly1,
            ruleCondition2, randomNeighborType2, randomEnableInactiveOnly2,
            ruleCondition3, randomNeighborType3, randomEnableInactiveOnly3);

        var ruleName = "Rule";
        if (auxiliary) {
            globalData.updateCellValueAuxiliary = randomRule;
            ruleName = "Auxiliary rule";
        } else{
            globalData.updateCellValue = randomRule;
        }
        console.log(ruleName + "changed to rule (" + 
                    randomIndex1 + "-" + randomNeighborType1 + "-" + randomEnableInactiveOnly1 + ", " + 
                    randomIndex2 + "-" + randomNeighborType2 + "-" + randomEnableInactiveOnly2 + ", " + 
                    randomIndex3 + "-" + randomNeighborType3 + "-" + randomEnableInactiveOnly3 + ")");
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

        var randomRule = updateCellValueTertiary4ValuesMeta(
            ruleCondition1, randomNeighborType1, randomEnableInactiveOnly1,
            ruleCondition2, randomNeighborType2, randomEnableInactiveOnly2,
            ruleCondition3, randomNeighborType3, randomEnableInactiveOnly3,
            ruleCondition4, randomNeighborType4, randomEnableInactiveOnly4,
            ruleCondition5, randomNeighborType5, randomEnableInactiveOnly5,
            ruleCondition6, randomNeighborType6, randomEnableInactiveOnly6);

        var ruleName = "Rule";
        if (auxiliary) {
            globalData.updateCellValueAuxiliary = randomRule;
            ruleName = "Auxiliary rule";
        } else{
            globalData.updateCellValue = randomRule;
        }
        console.log(ruleName + "changed to rule (" + 
                    randomIndex1 + "-" + randomNeighborType1 + "-" + randomEnableInactiveOnly1 + ", " + 
                    randomIndex2 + "-" + randomNeighborType2 + "-" + randomEnableInactiveOnly2 + ", " + 
                    randomIndex3 + "-" + randomNeighborType3 + "-" + randomEnableInactiveOnly3 + ", " +
                    randomIndex4 + "-" + randomNeighborType4 + "-" + randomEnableInactiveOnly4 + ", " + 
                    randomIndex5 + "-" + randomNeighborType5 + "-" + randomEnableInactiveOnly5 + ", " + 
                    randomIndex6 + "-" + randomNeighborType6 + "-" + randomEnableInactiveOnly6 + ")" );
    }
}


