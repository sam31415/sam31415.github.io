import { BBRuleNoZero, ColoringRule } from "./rules.js";


export class MetaRule {
    getRuleChain() {
        throw new Error("Must override method");
    }

    getUpdateRule() {
        function updateRule(cellValue, newCellValue, neighborList) {
            newCellValue = this.ruleChain[0].updateRule(cellValue % this.ruleChain[0].nStates, newCellValue, neighborList);
            var nStates = this.ruleChain[0].nStates;
            for (let i = 1; i < this.ruleChain.length; i++) {
                newCellValue += nStates * this.ruleChain[i].updateRule(
                    Math.floor(cellValue / nStates) % this.ruleChain[i].nStates, 
                    newCellValue, 
                    neighborList); 
                nStates *= this.ruleChain[i].nStates;
                newCellValue = newCellValue % nStates;
            }

            return newCellValue % nStates;
        }

        return updateRule
    }
}

export class BBColoring extends MetaRule {
    constructor(safe) {
        super();
        this.safe = safe;
        this.colorUnit = 4;
        this.ruleChain = this.getRuleChain();
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        ruleChain.push(new BBRuleNoZero());
        ruleChain.push(ColoringRule.sampleRule(null, this.safe));

        return ruleChain;
    }

}
