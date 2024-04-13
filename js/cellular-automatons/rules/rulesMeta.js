import { conditionInactive } from "./conditions.js";
import { BBRuleNoZero } from "./rules.js";


// Meta update rule depending on a condition, for 2 color rules.
export function updateCellValueSecondary2ValuesMeta(conditionFunc, neighbor_type, enableInactiveOnly) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbor_list[0]);
        if (conditionFunc(neighbor_list[neighbor_type]) && conditionInactive(enableInactiveOnly)(cellValue)) {
            newCellValue = (newCellValue + 4) % 8;
        }
        return newCellValue;
    }

    return updateRule;
}

// Meta update rule depending on two conditions, for 3 color rules.
export function updateCellValueSecondary3ValuesMeta(
    conditionFunc1, neighbor_type1, enableInactiveOnly1,
    conditionFunc2, neighbor_type2, enableInactiveOnly2) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbor_list[0]);
        if (conditionFunc1(neighbor_list[neighbor_type1]) && conditionInactive(enableInactiveOnly1)(cellValue)) {
            newCellValue = (newCellValue + 4) % 12;
        } else if (conditionFunc2(neighbor_list[neighbor_type2]) && conditionInactive(enableInactiveOnly2)(cellValue)) {
            newCellValue = (newCellValue + 8) % 12;
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
        newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbor_list[0]);
        if (conditionFunc1(neighbor_list[neighbor_type1]) && conditionInactive(enableInactiveOnly1)(cellValue)) {
            newCellValue = (newCellValue + 4) % 16;
        } else if (conditionFunc2(neighbor_list[neighbor_type2]) && conditionInactive(enableInactiveOnly2)(cellValue)) {
            newCellValue = (newCellValue + 8) % 16;
        } else if (conditionFunc3(neighbor_list[neighbor_type3]) && conditionInactive(enableInactiveOnly3)(cellValue)) {
            newCellValue = (newCellValue + 12) % 16;
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
    conditionFunc6, neighbor_type6, enableInactiveOnly6, flavour = 0) {
    function updateRule(cellValue, newCellValue, neighbor_list) {
        newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbor_list[0]);
        if (flavour == 0) {
            newCellValue = newCellValue % 16
        }
        if (flavour == 1) {
            newCellValue = newCellValue % 4 + 16 * Math.floor(newCellValue / 16)
        }
        // newCellValue += 4 * BBRuleNoZero(Math.floor(newCellValue / 4) % 4, newCellValue, neighbor_list[3]);

        if (conditionFunc1(neighbor_list[neighbor_type1]) && conditionInactive(enableInactiveOnly1)(cellValue)) {
            newCellValue = (newCellValue + 4) % 16;
        } else if (conditionFunc2(neighbor_list[neighbor_type2]) && conditionInactive(enableInactiveOnly2)(cellValue)) {
            newCellValue = (newCellValue + 8) % 16;
        } else if (conditionFunc3(neighbor_list[neighbor_type3]) && conditionInactive(enableInactiveOnly3)(cellValue)) {
            newCellValue = (newCellValue + 12) % 16;
        }
        newCellValue = newCellValue % 16;
        if (conditionFunc4(neighbor_list[neighbor_type4])
            //&& conditionInactive(enableInactiveOnly4)(cellValue)
        ) {
            newCellValue = (newCellValue + 16) % 64;
        } else if (conditionFunc5(neighbor_list[neighbor_type5])
            //&& conditionInactive(enableInactiveOnly5)(cellValue)
        ) {
            newCellValue = (newCellValue + 32) % 64;
        } else if (conditionFunc6(neighbor_list[neighbor_type6])
            //&& conditionInactive(enableInactiveOnly6)(cellValue)
        ) {
            newCellValue = (newCellValue + 48) % 64;
        }
        return newCellValue;
    }

    return updateRule;
}
