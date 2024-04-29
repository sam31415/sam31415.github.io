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
    constructor(preset, neighborTypes) {
        super();
        this.preset = preset;
        this.neighborTypes = neighborTypes;
        if (neighborTypes == null) {
            if (preset == "safe") {
                this.neighborTypes = {0: 1/3, 1: 1/3, 2: 1/3};
            } else if (preset == "mix") {
                this.neighborTypes = {0: 0.25, 1: 0.25, 2: 0.25, 3: 0.05, 4: 0.05, 5: 0.05, 6: 0.05, 7: 0.05};
            } else {
                this.neighborTypes = {0: 1/8, 1: 1/8, 2: 1/8, 3: 1/8, 4: 1/8, 5: 1/8, 6: 1/8, 7: 1/8};
            }
        }
        this.colorUnit = 4;
        this.ruleChain = this.getRuleChain();
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        ruleChain.push(new BBRuleNoZero());
        ruleChain.push(ColoringRule.sampleRule(null, this.neighborTypes));

        return ruleChain;
    }
}
