class Rule {
    constructor() {
        this.nStates;
    }

    updateRule(cellValue, newCellValue, neighbor_list) {
        throw new Error("Must override method");
    }

}

export class BBRuleNoZero extends Rule{
    constructor() {
        super();
        this.nStates = 4;
    }

    updateRule(cellValue, newCellValue, neighbor_list) {
        var cellValueM4 = cellValue % 4;
        if (cellValueM4 == 1 || cellValueM4 == 3) {
            newCellValue = 2;
        } else if (cellValueM4 == 2) {
            newCellValue = 0;
        } else if (cellValueM4 == 0 && neighbor_list[0] == 2) {
            newCellValue = 1;
        } else if (cellValueM4 == 0 && neighbor_list[0] > 2) {
            newCellValue = 3;
        }
        return newCellValue;
    }
}

export class ColoringRule extends Rule{
    constructor(conditions, nColors) {
        super();
        this.nColors = nColors;
        this.conditions = conditions;
        this.nStates = this.nColors;
    }

    updateRule(cellValue, newCellValue, neighborList) {
        newCellValue = 0;
        for (let i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i].test(neighborList, cellValue)) {
                //newCellValue = (newCellValue + this.nUnderlyingStates * (i + 1)) % this.nStates;
                newCellValue = (i + 1) % this.nColors;
                break;
            } 
        }
        return newCellValue;
    }
}
