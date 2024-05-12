import { Generations, ModifiedBriansBrain, BriansBrain, StarWars, ConwayNoZero, ColoringRule, SparseFourStateRule } from "./rules.js";


export const METAPRESETSAFE = "safe";
export const METAPRESETMIX = "mix";
export const METAPRESETGENERAL = "general";

export class MetaRule {
    colorUnit;
    ruleChain;
    updateRule;

    getRuleChain() {
        throw new Error("Must override method");
    }

    getUpdateRule() {
        function updateRule(cellValue, newCellValue, neighbourList, time) {
            newCellValue = this.ruleChain[0].updateRule(cellValue % this.ruleChain[0].nStates, newCellValue, neighbourList, time);
            var nStates = this.ruleChain[0].nStates;
            for (let i = 1; i < this.ruleChain.length; i++) {
                newCellValue += nStates * this.ruleChain[i].updateRule(
                    Math.floor(cellValue / nStates) % this.ruleChain[i].nStates, 
                    newCellValue, 
                    neighbourList,
                    time); 
                nStates *= this.ruleChain[i].nStates;
                newCellValue = newCellValue % nStates;
            }

            return newCellValue % nStates;
        }

        return updateRule
    }

    evolveRuleChain() {
        throw new Error("Must override method");
    }

    getName() {
        return this.ruleChain.map(r => r.getName()).join("-");
    }
}

export class PureBB extends MetaRule {
    constructor(preset) {
        super();
        this.preset = preset;
        this.colorUnit = 1;
        this.ruleChain = this.getRuleChain();
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        if (this.preset == "Original") {
            ruleChain.push(new BriansBrain());
        } else if (this.preset == "StarWars") {
            ruleChain.push(new StarWars());
        } else if (this.preset == "Modified") {
            ruleChain.push(new ModifiedBriansBrain());
        } else {
            ruleChain.push(new Generations(this.preset));
        }

        return ruleChain;
    }

    evolveRuleChain() {
        return
    }

}

export class BBColoring extends MetaRule {
    constructor(preset, neighbourTypes, name = null) {
        super();
        this.preset = preset;
        this.neighbourTypes = neighbourTypes;
        this.periodicityLength = null;
        this.neighbourGeometryType = null;
        if (neighbourTypes == null) {
            if (preset == METAPRESETSAFE) {
                this.neighbourTypes = {0: 1, 1: 0};
            } else if (preset == METAPRESETMIX) {
                if (Math.random() < 0.5) {
                    this.neighbourTypes = {0: 0.8, 1: 0.2};
                } else {
                    this.neighbourTypes = {0: 1.0, 1: 0.0};
                }
                this.neighbourTypes = {0: 0.8, 1: 0.2};
            } else {
                this.neighbourTypes = {0: 0.5, 1: 0.5};
            }
        }
        this.colorUnit = 4;
        if (name == null) {
            this.ruleChain = this.getRuleChain();
        } else {
            this.ruleChain = this.getRuleChainfromName(name);
        }
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        if (this.preset == METAPRESETSAFE) {
            ruleChain.push(new ModifiedBriansBrain());
            //ruleChain.push(new ConwayNoZero())
        } else {
            var rnd = Math.random()
            if (rnd < 0.5) {
                ruleChain.push(new ModifiedBriansBrain());
            } else if (rnd < 0.6) {
                ruleChain.push(new BriansBrain())
            } else if (rnd < 0.8) {
                ruleChain.push(new StarWars());
            } else if (rnd < 0.9) {
                // A bit flashy...
                //ruleChain.push(new Generations("B3/S123/4"))
                ruleChain.push(new ConwayNoZero())
            } else if (this.preset != METAPRESETSAFE) {
                // Caterpillars. Reevaluate with proper random masks.
                //ruleChain.push(new Generations("B378/S124567/4"))
            } 
            if (ruleChain.length == 0) {
                ruleChain.push(new ModifiedBriansBrain());
            }
        }

        ruleChain.push(ColoringRule.sampleRule(null, this.neighbourTypes, this.neighbourGeometryType, 4, 4, this.periodicityLength));

        return ruleChain;
    }

    evolveRuleChain() {
        this.ruleChain[1].evolveRule(this.neighbourTypes)
    }

    getRuleChainfromName(name) {
        var ruleChain = [];
        var [baseRuleName, ruleNames] = name.split("-");
        if (baseRuleName == "BB") {
            ruleChain.push(new ModifiedBriansBrain());
        } else if (baseRuleName == "TBB") {
            ruleChain.push(new BriansBrain())
        } else if (baseRuleName == "SW") {
            ruleChain.push(new StarWars())
        }
        ruleChain.push(new StarWars());
        ruleChain.push(ColoringRule.ruleFromNames(ruleNames));

        return ruleChain;
    
    }
}

export class BBColoring2 extends MetaRule {
    constructor(preset, neighbourTypes, name = null) {
        super();
        this.preset = preset;
        this.neighbourTypes = neighbourTypes;
        this.periodicityLength = null;
        this.neighbourGeometryType = null;
        if (neighbourTypes == null) {
            if (preset == METAPRESETSAFE) {
                this.neighbourTypes = {0: 1, 1: 0};
            } else if (preset == METAPRESETMIX) {
                if (Math.random() < 0.5) {
                    this.neighbourTypes = {0: 0.8, 1: 0.2};
                } else {
                    this.neighbourTypes = {0: 1.0, 1: 0.0};
                }
                this.neighbourTypes = {0: 0.8, 1: 0.2};
            } else {
                this.neighbourTypes = {0: 0.5, 1: 0.5};
            }
        }
        this.colorUnit = 16;
        if (name == null) {
            this.ruleChain = this.getRuleChain();
        } else {
            this.ruleChain = this.getRuleChainfromName(name);
        }
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        ruleChain.push(new ModifiedBriansBrain());
        ruleChain.push(ColoringRule.sampleRule(null, this.neighbourTypes, this.neighbourGeometryType, 4, 4, this.periodicity));
        ruleChain.push(ColoringRule.sampleRule(null, this.neighbourTypes, this.neighbourGeometryType, 16, 4, this.periodicity));


        return ruleChain;
    }

    evolveRuleChain() {
        this.ruleChain[1].evolveRule(this.neighbourTypes)
        this.ruleChain[2].evolveRule(this.neighbourTypes)
    }

    // TO IMPLEMENT
    getRuleChainfromName(name) {
        var ruleChain = [];
        var ruleNames = name.split("-")[1];
        ruleChain.push(new ModifiedBriansBrain());
        ruleChain.push(ColoringRule.ruleFromNames(ruleNames));

        return ruleChain;
    
    }
}


export class Conway extends MetaRule {
    constructor(preset, neighbourTypes) {
        super();
        this.preset = preset;
        this.neighbourTypes = neighbourTypes;
        if (neighbourTypes == null) {
            if (preset == METAPRESETSAFE) {
                this.neighbourTypes = {0: 1/3, 1: 1/3, 2: 1/3};
            } else if (preset == METAPRESETMIX) {
                this.neighbourTypes = {0: 0.25, 1: 0.25, 2: 0.25, 3: 0.05, 4: 0.05, 5: 0.05, 6: 0.05, 7: 0.05};
            } else {
                this.neighbourTypes = {0: 1/8, 1: 1/8, 2: 1/8, 3: 1/8, 4: 1/8, 5: 1/8, 6: 1/8, 7: 1/8};
            }
        }
        this.colorUnit = 4;
        this.ruleChain = this.getRuleChain();
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        ruleChain.push(new ConwayNoZero());
        ruleChain.push(ColoringRule.sampleRule(null, this.neighbourTypes));

        return ruleChain;
    }

    evolveRuleChain() {
        return ;
    }
}

export class SparseFourStates extends MetaRule {
    constructor(neighbourTypes) {
        super();
        this.neighbourTypes = neighbourTypes;
        if (neighbourTypes == null) {
            this.neighbourTypes = {0: 0.5, 1: 0.5};;
        }
        this.colorUnit = 1;
        this.ruleChain = this.getRuleChain();
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        ruleChain.push(SparseFourStateRule.sampleRule(4, this.neighbourTypes));

        return ruleChain;
    }

    evolveRuleChain() {
        // TO IMPLEMENT !!!
        return ;
    }
}


export class TestSparseFourStates extends MetaRule {
    constructor(preset, neighbourTypes) {
        super();
        this.preset = preset;
        this.neighbourTypes = neighbourTypes;
        if (neighbourTypes == null) {
            this.neighbourTypes = {0: 0.5, 1: 0.5};;
        }
        this.colorUnit = 4;
        this.ruleChain = this.getRuleChain();
        this.updateRule = this.getUpdateRule();
    }

    getRuleChain() {
        var ruleChain = [];
        var name = "Eq1CondNT0|15P011, Eq3AbsNT1|12P110, Eq7NoneNT1|13P0001, Eq6NoneNT0|12P11000, Eq8AbsNT0|15P, Bigger4CondNT0|13P, Eq7AbsNT0|12P10, Bigger5NoneNT0|13P"
        ruleChain.push(SparseFourStateRule.ruleFromNames(name));
        ruleChain.push(ColoringRule.sampleRule(null, this.neighbourTypes));

        return ruleChain;
    }

    evolveRuleChain() {
        // TO IMPLEMENT !!!
        return ;
    }
}

