
export function conditionNeighborEq(nvalue) {
    function conditionNeighborEqValue(neighbors) {
        return neighbors == nvalue;
    }
    return conditionNeighborEqValue;
}

export function conditionNeighborBigger(value) {
    function conditionNeighborBiggerValue(neighbors) {
        return neighbors > value;
    }
    return conditionNeighborBiggerValue;
}

export function conditionInactive(variation) {
    function conditionInactiveCondFunction(cellValue) {
        return cellValue == 0;
    }
    function conditionInactiveAbsFunction(cellValue) {
        return cellValue % 4 == 0;
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
export var ruleConditions = ruleConditionsEq.concat(ruleConditionsBigger);

// To try to avoid rules with less colors, but in the end not used.
function testConditionCompatibility(conditionIndex1, conditionIndex2) {
    if (conditionIndex1 == conditionIndex2) {
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

