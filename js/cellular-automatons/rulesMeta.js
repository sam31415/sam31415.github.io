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
var valuesEq = [1, 2, 3];
var ruleConditionsEq = valuesEq.map(value => conditionNeighborEq(value));
var valuesBigger = [0, 1, 2, 3];
var ruleConditionsBigger = valuesBigger.map(value => conditionNeighborBigger(value));
var ruleConditions = ruleConditionsEq.concat(ruleConditionsBigger);

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

export function updateCellValueSecondary2ValuesMeta(conditionFunc, neighbor_type) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        if (conditionFunc(neighbor_list[neighbor_type])) {
            newCellValue = (newCellValue + 10) % 20;
        }
        return newCellValue;
    }

    return updateRule;
}// Meta update rule depending on two conditions, for 3 color rules.

export function updateCellValueSecondary3ValuesMeta(conditionFunc1, neighbor_type1, conditionFunc2, neighbor_type2) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        if (conditionFunc1(neighbor_list[neighbor_type1])) {
            newCellValue = (newCellValue + 10) % 30;
        } else if (conditionFunc2(neighbor_list[neighbor_type2])) {
            newCellValue = (newCellValue + 20) % 30;
        }
        return newCellValue;
    }

    return updateRule;
}
// Meta update rule depending on three conditions, for 4 color rules.

export function updateCellValueSecondary4ValuesMeta(conditionFunc1, neighbor_type1, conditionFunc2, neighbor_type2, conditionFunc3, neighbor_type3) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 10, newCellValue, neighbor_list[0]);
        if (conditionFunc1(neighbor_list[neighbor_type1])) {
            newCellValue = (newCellValue + 10) % 40;
        } else if (conditionFunc2(neighbor_list[neighbor_type2])) {
            newCellValue = (newCellValue + 20) % 40;
        } else if (conditionFunc3(neighbor_list[neighbor_type3])) {
            newCellValue = (newCellValue + 30) % 40;
        }
        return newCellValue;
    }

    return updateRule;
}
export function changeRule2Colors(globalData, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
        var randomIndex = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType = Math.floor(Math.random() * 3);
        var randomCondition = ruleConditions[randomIndex];
        var randomRule = updateCellValueSecondary2ValuesMeta(randomCondition, randomNeighborType);
        globalData.updateCellValue = randomRule;
        console.log("Rule changed to rule " + randomIndex + "-" + randomNeighborType);
    }
}
export function changeRule3Colors(globalData, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
        var randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType1 = Math.floor(Math.random() * 3);
        var randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType2 = Math.floor(Math.random() * 3);
        while (!testConditionCompatibility(randomIndex1, randomNeighborType1, randomIndex2, randomNeighborType2)) {
            randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
            randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        }
        var ruleCondition1 = ruleConditions[randomIndex1];
        var ruleCondition2 = ruleConditions[randomIndex2];
        var randomRule = updateCellValueSecondary3ValuesMeta(ruleCondition1, randomNeighborType1, ruleCondition2, randomNeighborType2);
        globalData.updateCellValue = randomRule;
        console.log("Rule changed to rule (" + randomIndex1 + "-" + randomNeighborType1 + ", " + randomIndex2 + "-" + randomNeighborType2 + ")");
    }
}
export function changeRule4Colors(globalData, forceChange = false) {
    if (Math.random() < 0.0002 || forceChange) {
        var randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType1 = Math.floor(Math.random() * 3);
        var randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType2 = Math.floor(Math.random() * 3);
        var randomIndex3 = Math.floor(Math.random() * ruleConditions.length);
        var randomNeighborType3 = Math.floor(Math.random() * 3);
        while (!testConditionCompatibility(randomIndex1, randomIndex2) ||
            !testConditionCompatibility(randomIndex2, randomIndex3) ||
            !testConditionCompatibility(randomIndex1, randomIndex3)) {
            randomIndex1 = Math.floor(Math.random() * ruleConditions.length);
            randomIndex2 = Math.floor(Math.random() * ruleConditions.length);
            randomIndex3 = Math.floor(Math.random() * ruleConditions.length);
        }
        var ruleCondition1 = ruleConditions[randomIndex1];
        var ruleCondition2 = ruleConditions[randomIndex2];
        var ruleCondition3 = ruleConditions[randomIndex3];
        var randomRule = updateCellValueSecondary4ValuesMeta(ruleCondition1, randomNeighborType1, ruleCondition2, randomNeighborType2, ruleCondition3, randomNeighborType3);
        globalData.updateCellValue = randomRule;
        console.log("Rule changed to rule (" + randomIndex1 + "-" + randomNeighborType1 + ", " + randomIndex2 + "-" + randomNeighborType2 + ", " + randomIndex3 + "-" + randomNeighborType3 + ")");
    }
}


