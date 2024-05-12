import { Condition } from './conditions.js';
import { sampleNeighbourhoodGeometryType, MIX } from '../neighbours/neighbourCount.js';
import { createWeightedSampler } from "../randomness/weightedSampler.js";
import { Grid } from "../classes/grid.js";


class Rule {
    constructor() {
        this.nStates = undefined;
    }

    updateRule(cellValue, newCellValue, neighbour_list, time) {
        throw new Error("Must override method");
    }

    getName() {
        throw new Error("Must override method");
    }

}

class PrimaryRule extends Rule{
    constructor() {
        super();
        this.seedingPatterns = this.getSeedingPatterns();
        this.constructSeedingSampler();
        this.randomnessLogShift = 0.0;
    }

    getSeedingPatterns() {
        throw new Error("Must override method");
    }

    constructSeedingSampler() {
        this.seedMasks = Object.keys(this.seedingPatterns).map(key => this.seedingPatterns[key].mask);
        let seedProb = Object.keys(this.seedingPatterns).map(key => this.seedingPatterns[key].prob);
        this.seedSampler = createWeightedSampler(seedProb);
    }

}

export class ModifiedBriansBrain extends PrimaryRule{
    constructor() {
        super();
        this.nStates = 4;
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        var cellValueM4 = cellValue % 4;
        if (cellValueM4 == 1 || cellValueM4 == 3) {
            newCellValue = 2;
        } else if (cellValueM4 == 2) {
            newCellValue = 0;
        } else if (cellValueM4 == 0 && neighbourList[0][0] == 2) {
            newCellValue = 1;
        } else if (cellValueM4 == 0 && neighbourList[0][0] > 2) {
            newCellValue = 3;
        }
        return newCellValue;
    }

    getName() {
        return "BB";
    }

    getSeedingPatterns() {
        
        let seedingPatterns = {
            random: {prob: 10, mask: null},
            shortStar0: {prob: 2, mask: Grid.fromArray([[1, 0], [0, 1]])},
            shortStar1: {prob: 2, mask: Grid.fromArray([[0, 1], [1, 0]])},
            shortStar2: {prob: 2, mask: Grid.fromArray([[1, 0], [0, 1]])},
            waveSquare: {prob: 4, mask: Grid.fromArray([[1, 1], [1, 1]])},
            //waveHorizontal: {prob: 0.5, mask: [[0, 0], [1, 1]]},
            //waveVertical: {prob: 0.5, mask: [[0, 1], [0, 1]]},
            star: {prob: 4, mask: new Grid([[1, 0, 1], [0, 0, 0], [1, 0, 1]])},
            // spaceshipE: {prob: 2, mask: [[1, 1], [2, 2]]},
            // spaceshipN: {prob: 2, mask: [[1, 2], [1, 2]]},
            // spaceshipW: {prob: 2, mask: [[2, 2], [1, 1]]},
            // spaceshipS: {prob: 2, mask: [[2, 1], [2, 1]]},
            oscillator0: {prob: 2, mask: Grid.fromArray([[0, 0, 1, 0], [1, 2, 2, 0], [0, 2, 2, 1], [0, 1, 0, 0]])},
            oscillator1: {prob: 2, mask: Grid.fromArray([[0, 0, 2, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0], [0, 0, 2, 1, 2, 1, 2], [0, 0, 1, 0, 1, 0, 0],
                [2, 1, 2, 1, 2, 0, 0], [0, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 2, 0, 0]])},
            // gliderSE: {prob: 1, mask: [[0, 0, 1, 2], [0, 2, 0, 0], [1, 2, 1, 0]]},
            // gliderNE: {prob: 1, mask: [[2, 1, 0, 0], [0, 0, 2, 0], [0, 1, 2, 1]]},
            // gliderSW: {prob: 1, mask: [[1, 2, 1, 0], [0, 2, 0, 0], [0, 0, 1, 2]]},
            // gliderNW: {prob: 1, mask: [[0, 1, 2, 1], [0, 0, 2, 0], [2, 1, 0, 0]]},
            snakeHoriz: {prob: 2, mask: Grid.fromArray([[0, 1, 2, 1, 2, 1, 0], [1, 2, 0, 1, 0, 2, 1], [1, 2, 0, 1, 0, 2, 1], [0, 1, 2, 1, 2, 1, 0]])},
            snakeVert: {prob: 2, mask: Grid.fromArray([[0, 1, 2, 1, 2, 1, 0], [1, 2, 0, 1, 0, 2, 1], [1, 2, 0, 1, 0, 2, 1], [0, 1, 2, 1, 2, 1, 0]], true)},
        };
        return seedingPatterns;
    }
}

export class BriansBrain extends PrimaryRule{
    constructor() {
        super();
        this.nStates = 4;
        this.randomnessLogShift = -1.0
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        var cellValueM4 = cellValue % 4;
        if (cellValueM4 == 3) {
            cellValueM4 = 0;
        }
        if (cellValueM4 == 1) {
            newCellValue = 2;
        } else if (cellValueM4 == 2 || cellValueM4 == 3) {
            newCellValue = 0;
        } else if ((cellValueM4 == 0  || cellValueM4 == 3) && neighbourList[0][0] == 2) {
            newCellValue = 1;
        } else if (cellValueM4 == 0 && neighbourList[0][0] > 2) {
            newCellValue = 3;
        }
        return newCellValue;
    }

    getName() {
        return "TBB";
    }

    getSeedingPatterns() {
        let seedingPatterns = {
            random: {prob: 10, mask: null},
            snakeHoriz: {prob: 1, mask: Grid.fromArray([[0, 1, 2, 1, 2, 1, 0], [1, 2, 0, 1, 0, 2, 1], [1, 2, 0, 1, 0, 2, 1], [0, 1, 2, 1, 2, 1, 0]])},
            oscillator0: {prob: 2, mask: Grid.fromArray([[0, 0, 1, 0], [1, 2, 2, 0], [0, 2, 2, 1], [0, 1, 0, 0]])},
            oscillator1: {prob: 2, mask: Grid.fromArray([[0, 0, 2, 0, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0], [0, 0, 2, 1, 2, 1, 2], [0, 0, 1, 0, 1, 0, 0],
                [2, 1, 2, 1, 2, 0, 0], [0, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 2, 0, 0]])},
            waveSquare: {prob: 4, mask: Grid.fromArray([[1, 1], [1, 1]])},
            butterflyGun: {prob: 10000, mask: Grid.fromArray([[0, 2, 1, 0, 0, 0, 0, 0], [0, 0, 2, 1, 0, 0, 0, 0], [2, 0, 0, 2, 1, 0, 0, 0], 
                [1, 2, 0, 0, 2, 1, 0, 0], [0, 1, 0, 2, 1, 0, 2, 1], [0, 0, 2, 1, 0, 0, 2, 1]])},

        };
        return seedingPatterns;
    }
}

export class StarWars extends PrimaryRule{
    constructor() {
        super();
        this.nStates = 4;
        this.randomnessLogShift = -1.0
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        var cellValueM4 = cellValue % 4;
        if (cellValueM4 == 1 && (neighbourList[0][0] < 3 || neighbourList[0][0] > 5)) {
            newCellValue = 2;
        } else if (cellValueM4 == 2) {
            newCellValue = 3;
        } else if (cellValueM4 == 3) {
            newCellValue = 0;
        } else if ((cellValueM4 == 0) && neighbourList[0][0] == 2) {
            newCellValue = 1;
        }
        return newCellValue;
    }

    getName() {
        return "SW";
    }

    getSeedingPatterns() {
        let gunWeight = 1/5;
        let snakeWeight = 1;
        //let stillLifeWeight = 1;
        let starWeight = 2;
        let seedingPatterns = {
            random: {prob: 3, mask: null},
            snake: {prob: snakeWeight, mask: Grid.fromArray([[0, 1, 2, 1, 2, 1, 0], [1, 2, 0, 1, 0, 2, 1], [1, 2, 0, 1, 0, 2, 1], [0, 1, 2, 1, 2, 1, 0]])},
            gun0: {prob: gunWeight, mask: Grid.fromArray([[1, 2, 3], [0, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 0], [0, 1, 2], [3, 0, 1]])},
            gun1: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 1, 2, 0], 
                [3, 0, 1, 0, 0, 0, 1, 0, 3], [0, 0, 1, 1, 0, 1, 1, 1, 0], [0, 0, 1, 1, 0, 0, 1, 0, 0], [0, 0, 2, 0, 0, 3, 2, 1, 0]])},
            gun2: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 1, 0, 0], [0, 1, 2, 0, 1, 1, 1, 0], [1, 2, 3, 1, 1, 0, 1, 1], 
                [1, 2, 3, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 2, 0, 0]])},   
            gun3: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 0, 0, 3, 2, 0], [0, 0, 1, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], 
                [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1], [0, 1, 0, 0, 0, 0, 1, 0]])},  
            gun4: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 3], [0, 0, 0, 1, 0, 2], [0, 0, 0, 0, 0, 1], 
                [0, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 1, 0]])}, 
            gun5: {prob: gunWeight, mask: Grid.fromArray([[0, 1, 1, 2, 0], [2, 0, 1, 0, 3], [3, 1, 1, 1, 0], [0, 1, 0, 2, 1]])},
            gun6: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 2, 0], [3, 0, 1, 1, 0], [2, 1, 1, 1, 3], [1, 0, 1, 0, 2], [0, 0, 0, 1, 0]])},
            gun7: {prob: gunWeight, mask: Grid.fromArray([[0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 1, 0, 3, 2, 0], [0, 1, 0, 2, 0, 1, 0, 0, 1, 0], 
                [0, 1, 2, 2, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0]])},
            gun8: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 0, 3, 2, 0, 0], [0, 0, 0, 0, 1, 0, 3, 0], [0, 0, 1, 2, 0, 1, 0, 0], 
                [0, 0, 2, 3, 1, 1, 0, 0], [3, 1, 0, 1, 0, 1, 1, 1], [2, 0, 1, 1, 1, 0, 1, 3], [0, 3, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 1, 3, 0, 0]])},  
            gun9: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 3, 0, 0], [0, 0, 2, 0, 1, 0, 2, 1], [0, 0, 3, 1, 1, 1, 2, 1], 
                [0, 0, 1, 0, 1, 0, 3, 0], [3, 0, 1, 0, 1, 0, 0, 0], [2, 1, 1, 1, 3, 0, 0, 0], [1, 0, 1, 0, 2, 0, 0, 0], [0, 0, 0, 0, 1, 3, 0, 0]])}, 
            gun10: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 1, 1, 3, 0, 1, 0], [0, 1, 0, 2, 2, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 0], 
                [0, 1, 0, 0, 0, 0, 3, 0]])},  
            gun11: {prob: gunWeight, mask: Grid.fromArray([[0, 3, 2, 1, 1, 2, 3, 0], [0, 0, 1, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], 
                [2, 3, 0, 0, 0, 0, 3, 2]])},  
            gun12: {prob: gunWeight, mask: Grid.fromArray([[0, 2, 3, 0, 0, 1, 0, 0, 0], [1, 0, 1, 1, 1, 1, 0, 3, 0], [0, 1, 1, 0, 0, 1, 1, 2, 1], 
                [0, 0, 1, 1, 1, 1, 0, 2, 1], [0, 1, 2, 0, 0, 0, 3, 0, 0]])},
            gun13: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 0, 3, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0], 
                [0, 2, 3, 1, 1, 1, 3, 2, 0], [1, 0, 1, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1], [2, 0, 1, 0, 2, 0, 1, 0, 2], [0, 3, 0, 1, 0, 1, 0, 3, 0]])},    
            gun14: {prob: gunWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1], [2, 1, 1, 1, 1, 1, 1, 1, 2], 
                [0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 1, 0, 0, 1, 0]])},  
            gun15: {prob: gunWeight, mask: Grid.fromArray([[0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 1, 0], 
                [0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 0]])}, 
            star: {prob: starWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [1, 1, 0, 0, 0, 1, 1], 
                [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]])},
        };
        return seedingPatterns;
    }
}

export class Generations extends PrimaryRule{
    constructor(ruleString) {
        super();
        this.ruleString = ruleString;
        const parts = this.ruleString.split('/');
        this.birth = new Uint8Array(parts[0].substring(1).split('').map(Number));
        this.survive = new Uint8Array(parts[1].substring(1).split('').map(Number));
        this.nStates = Number(parts[2]);
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        var cellValueM4 = cellValue % this.nStates;
        if (cellValueM4 == 1 && this.survive.includes(neighbourList[0][0])) {
            newCellValue = 1;
        } else if ((cellValueM4 > 0) && (cellValueM4 < this.nStates - 1)) {
            newCellValue += 1;
        } else if (cellValueM4 == this.nStates - 1) {
            newCellValue = 0;neighbourList
        } else if ((cellValueM4 == 0) && (this.birth.includes(neighbourList[0][0]))) {
            newCellValue = 1;
        }
        return newCellValue;
    }

    getName() {
        return this.ruleString;
    }

    getSeedingPatterns() {
        let seedingPatterns = {
            random: {prob: 1, mask: null},
        };
        return seedingPatterns;
    }
}


export class ConwayNoZero extends PrimaryRule{
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

    getSeedingPatterns() {
        let seedingPatterns = {
            void: {prob: 1, mask: null},
        };
        return seedingPatterns;
    }

    getName() {
        return "CW";
    }
}

export class ColoringRule extends Rule{
    constructor(conditions, nColors, neighbourTypes, neighbourhoodGeometryType, periodicityLength) {
        super();
        this.nColors = nColors;
        this.conditions = conditions;
        this.nStates = this.nColors;
        this.neighbourTypes = neighbourTypes;
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
        return this.conditions.map(c => c.name()).join('||');
    }

    static sampleRule(nConditions = null, neighbourTypes = null, neighbourhoodGeometryType = null, modulo = 4, nColors = 4, periodicityLength = null) {
        var conditions = [];
        if (nConditions == null) {
            nConditions = Math.floor(Math.random() * 8) + 2;
        }
        if (neighbourhoodGeometryType == null) {
            neighbourhoodGeometryType = sampleNeighbourhoodGeometryType();
        }
        if (periodicityLength == null) {
            periodicityLength = this.samplePeriodicityLength();
        }
        for (let i = 0; i < nConditions; i++) {
            conditions.push(Condition.randomSample(neighbourTypes, modulo, neighbourhoodGeometryType, periodicityLength));
        }
        console.log(new Date().toLocaleTimeString() + ' Sampling coloring rule ' + neighbourhoodGeometryType + ': ' + conditions.map(c => c.name()).join(', '))

        return new ColoringRule(conditions, nColors, neighbourTypes, neighbourhoodGeometryType, periodicityLength);
    }

    static samplePeriodicityLength() {
        var rnd = Math.random();
        if (rnd < 0.2) {
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
            return Math.floor(Math.random() * 20) + 5;
        }

    }
    
    static ruleFromNames(nameString, nColors = 4) {
        var names = nameString.split('||');
        var conditions = names.map(name => Condition.fromName(name));

        return new ColoringRule(conditions, nColors, null, MIX, null)
    }

    evolveRule(neighbourTypes = null) {
        var rnd;
        var nConditions = this.conditions.length;
        if (neighbourTypes == null) {
            neighbourTypes = this.neighbourTypes;
        }
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
            this.changeCondition(neighbourTypes);
        } else {
            this.addCondition(neighbourTypes);
        }
    }

    addCondition(neighbourTypes) {
        var newConditions = this.conditions.slice();
        newConditions.push(Condition.randomSample(neighbourTypes, 4, this.neighbourhoodGeometryType, this.periodicityLength));
        console.log(new Date().toLocaleTimeString() + ' Adding condition ' + this.neighbourhoodGeometryType + ': ' + newConditions.map(c => c.name()).join('||'))

        this.conditions = newConditions;
        //return new ColoringRule(newConditions, this.nColors, this.neighbourhoodGeometryType, this.periodicityLength);
    }

    removeCondition() {
        var newConditions = this.conditions.slice();
        var index = Math.floor(Math.random() * newConditions.length);
        newConditions.splice(index, 1)[0];
        console.log(new Date().toLocaleTimeString() + ' Removing condition: ' + newConditions.map(c => c.name()).join('||'))

        this.conditions = newConditions;
        //return new ColoringRule(newConditions, this.nColors, this.neighbourhoodGeometryType, this.periodicityLength);
    }

    changeCondition(neighbourTypes) {
        var newConditions = this.conditions.slice();
        var index = Math.floor(Math.random() * newConditions.length);
        newConditions[index] = Condition.randomSample(neighbourTypes, 4, this.neighbourhoodGeometryType, this.periodicityLength);
        console.log(new Date().toLocaleTimeString() + ' Changing condition ' + index + ' to ' + this.neighbourhoodGeometryType + ': ' + newConditions.map(c => c.name()).join('||'))

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
        console.log('Sampling sparse four state rule: ' + conditions.map(c => c.map(cc => cc.name()).join(', ')).join('||'))

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
