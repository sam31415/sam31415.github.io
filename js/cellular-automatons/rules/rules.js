import { Condition } from './conditions.js';
import { sampleNeighbourhoodGeometryType } from '../neighbours/neighbourCount.js';

class Rule {
    constructor() {
        this.nStates;
    }

    updateRule(cellValue, newCellValue, neighbour_list, time) {
        throw new Error("Must override method");
    }

}

export class BBRuleNoZero extends Rule{
    constructor() {
        super();
        this.nStates = 4;
    }

    updateRule(cellValue, newCellValue, neighbour_list, time) {
        var cellValueM4 = cellValue % 4;
        if (cellValueM4 == 1 || cellValueM4 == 3) {
            newCellValue = 2;
        } else if (cellValueM4 == 2) {
            newCellValue = 0;
        } else if (cellValueM4 == 0 && neighbour_list[0][0] == 2) {
            newCellValue = 1;
        } else if (cellValueM4 == 0 && neighbour_list[0][0] > 2) {
            newCellValue = 3;
        }
        return newCellValue;
    }
}


export class ConwayNoZero extends Rule{
    constructor() {
        super();
        this.nStates = 4;
    }

    updateRule(cellValue, newCellValue, neighbour_list, time) {
        var sneighbours = neighbour_list[0][1];
        if ((cellValue % 4 == 1 || cellValue % 4 == 3) && sneighbours < 2) {
            newCellValue = 2;
        } else if ((cellValue % 4 == 1 || cellValue % 4 == 3) && (sneighbours == 2 || sneighbours == 3)) {
            newCellValue = 1;
        } else if ((cellValue % 4 == 1 || cellValue % 4 == 3) && sneighbours > 5) {
            newCellValue = 2;
        } else if ((cellValue % 4 == 0 || cellValue % 4 == 2) && sneighbours == 3) {
            newCellValue = 3;
        } else if (cellValue % 4 == 2) {
            newCellValue = 0;
        }
        return newCellValue;
    }
}

export class ColoringRule extends Rule{
    constructor(conditions, nColors, neighbourhoodGeometryType, periodicityLength) {
        super();
        this.nColors = nColors;
        this.conditions = conditions;
        this.nStates = this.nColors;
        this.neighbourhoodGeometryType = neighbourhoodGeometryType;
        this.periodicityLength = periodicityLength;
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        newCellValue = 0;
        for (let i = 0; i < this.conditions.length; i++) {
            if (this.conditions[i].test(neighbourList, cellValue, time)) {
                //newCellValue = (newCellValue + this.nUnderlyingStates * (i + 1)) % this.nStates;
                newCellValue = (i + 1) % this.nColors;
                break;
            } 
        }
        return newCellValue;
    }

    getName() {
        return this.conditions.map(c => c.name()).join(', ');
    }

    static sampleRule(nConditions = null, neighbourTypes = null, modulo = 4, nColors = 4) {
        var conditions = [];
        if (nConditions == null) {
            nConditions = Math.floor(Math.random() * 8) + 2;
        }
        var neighbourhoodGeometryType = sampleNeighbourhoodGeometryType();
        var periodicityLength = this.samplePeriodicityLength();
        for (let i = 0; i < nConditions; i++) {
            conditions.push(Condition.randomSample(neighbourTypes, modulo, neighbourhoodGeometryType, periodicityLength));
        }
        console.log(new Date().toLocaleTimeString() + ' Sampling coloring rule ' + neighbourhoodGeometryType + ': ' + conditions.map(c => c.name()).join(', '))

        return new ColoringRule(conditions, nColors, neighbourhoodGeometryType, periodicityLength);
    }

    static samplePeriodicityLength() {
        var rnd = Math.random();
        if (rnd < 0.3) {
            return null;
        } else if (rnd < 0.6) {
            return 1;
        } else if (rnd < 0.7) {
            return 2;
        } else if (rnd < 0.8) {
            return 3;
        } else if (rnd < 0.9) {
            return 4;
        } else {
            return Math.floor(Math.random() * 5) + 5;
        }
    }
    
    static ruleFromNames(nameString) {
        var names = nameString.split(', ');
        var conditions = names.map(name => Condition.fromName(name));

        return new ColoringRule(conditions, nColors, 'mix', null)
    }

    evolveRule() {
        var rnd;
        var nConditions = this.conditions.length;
        if (nConditions == 2) {
            rnd = Math.floor(Math.random() * 2) + 1;
        } else if (nConditions == 10) {
            rnd = Math.floor(Math.random() * 2);
        } else {
            rnd = Math.floor(Math.random() * 3);
        }
        if (rnd == 0) {
            this.removeCondition();
        } else if (rnd == 1) {
            this.changeCondition();
        } else {
            this.addCondition();
        }
    }

    addCondition() {
        var newConditions = this.conditions.slice();
        var neighbourTypes = {0: 1.0, 1: 0.0}
        newConditions.push(Condition.randomSample(neighbourTypes, 4, this.neighbourhoodGeometryType, this.periodicityLength));
        console.log(new Date().toLocaleTimeString() + ' Adding condition ' + this.neighbourhoodGeometryType + ': ' + newConditions.map(c => c.name()).join(', '))

        this.conditions = newConditions;
        //return new ColoringRule(newConditions, this.nColors, this.neighbourhoodGeometryType, this.periodicityLength);
    }

    removeCondition() {
        var newConditions = this.conditions.slice();
        var index = Math.floor(Math.random() * newConditions.length);
        newConditions.splice(index, 1)[0];
        console.log(new Date().toLocaleTimeString() + ' Removing condition: ' + newConditions.map(c => c.name()).join(', '))

        this.conditions = newConditions;
        //return new ColoringRule(newConditions, this.nColors, this.neighbourhoodGeometryType, this.periodicityLength);
    }

    changeCondition() {
        var newConditions = this.conditions.slice();
        var index = Math.floor(Math.random() * newConditions.length);
        var neighbourTypes = {0: 1.0, 1: 0.0}
        newConditions[index] = Condition.randomSample(neighbourTypes, 4, this.neighbourhoodGeometryType, this.periodicityLength);
        console.log(new Date().toLocaleTimeString() + ' Changing condition ' + index + ' to ' + this.neighbourhoodGeometryType + ': ' + newConditions.map(c => c.name()).join(', '))

        this.conditions = newConditions;
        //return new ColoringRule(newConditions, this.nColors, this.neighbourhoodGeometryType, this.periodicityLength);
    }
}


export class SparseFourStateRule extends Rule{
    constructor(conditions, nColors) {
        super();
        this.nColors = nColors;
        this.conditions = conditions;
        this.nStates = this.nColors;
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        newCellValue = 0;
        var conditions = this.conditions[cellValue % 4];
        for (let i = 0; i < conditions.length; i++) {
            if (conditions[i].test(neighbourList, cellValue)) {
                //newCellValue = (newCellValue + this.nUnderlyingStates * (i + 1)) % this.nStates;
                newCellValue = (i + 1) % this.nColors;
                break;
            } 
        }
        
        return newCellValue;
    }

    getName() {
        return this.conditions.map(c => c.map(cc => cc.name()).join(', ')).join(' || ');
    }

    static sampleRule(nConditions = null, neighbourTypes = null, modulo = 4, nColors = 4) {
        var conditions = [];
        for (let i = 0; i < 4; i++) {
            conditions.push([]);
            if (nConditions == null) {
                nConditions = Math.floor(Math.random() * 8) + 2;
            }
            for (let j = 0; j < nConditions; j++) {
                conditions[i].push(Condition.randomSample(neighbourTypes, modulo));
            }
        }
        console.log('Sampling sparse four state rule: ' + conditions.map(c => c.map(cc => cc.name()).join(', ')).join(' || '))

        return new SparseFourStateRule(conditions, nColors);
    }
    
    static ruleFromNames(nameString, nColors = 4) {
        var conditions = [];
        var nameGroups = nameString.split(' || ');
        for (let i = 0; i < nameGroups.length; i++) {
            conditions.push([]);
            var names = nameGroups[i].split(', ');
            conditions[i] = names.map(name => Condition.fromName(name));
        }

        return new SparseFourStateRule(conditions, nColors)
    }
}
