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
            random: {prob: 15, mask: null},
            // shortStar0: {prob: 2, mask: Grid.fromArray([[1, 0], [0, 1]])},
            // shortStar1: {prob: 2, mask: Grid.fromArray([[0, 1], [1, 0]])},
            // shortStar2: {prob: 2, mask: Grid.fromArray([[1, 0], [0, 1]])},
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
            random: {prob: 15, mask: null},
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
            random: {prob: 6, mask: null},
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
        if (ruleString == null) {
            ruleString = Generations.generateRule();
        }
        this.initialiseRule(ruleString);
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        var cellValueM4 = cellValue % this.nStates;
        if (cellValueM4 == 1 && this.survive.includes(neighbourList[0][this.neighbourhood])) {
            newCellValue = 1;
        } else if ((cellValueM4 > 0) && (cellValueM4 < this.nStates - 1)) {
            newCellValue += 1;
        } else if (cellValueM4 == this.nStates - 1) {
            newCellValue = 0;
        } else if ((cellValueM4 == 0) && (this.birth.includes(neighbourList[0][this.neighbourhood]))) {
            newCellValue = 1;
        } else if ((cellValueM4 == 0) && (this.inhibited.includes(neighbourList[0][this.neighbourhood]))) {
            newCellValue = this.nStates - 1;
        }
        return newCellValue;
    }

    initialiseRule(ruleString) {
        this.ruleString = ruleString;
        const parts = this.ruleString.split('/');
        this.neighbourhood = 0;
        this.inhibited = []
        for (var part of parts) {
            if (part[0] == 'N') {
                this.neighbourhood = Number(parts[0].substring(1));
            } else if (part[0] == 'B') {
                this.birth = new Uint8Array(part.substring(1).split('').map(Number));
            } else if (part[0] == 'S') {
                this.survive = new Uint8Array(part.substring(1).split('').map(Number));
            } else if (part[0] == 'I') {
                this.inhibited = new Uint8Array(parts[2].substring(1).split('').map(Number));
            } else {
                this.nStates = Number(part);
            }
        }
    }

    static generateRule(N) {
        let nStates = Math.floor(Math.random() * 10) + 3;
        if (N == null) {
            N = Math.floor(Math.random() * 5 * nStates);
        }
        let Nred =  Math.floor(N / nStates) % 5;
        var maxNeighbours = 8
        if ([1, 2].includes(Nred)) {
            maxNeighbours = 4;
        } else if (Nred == 3) {
            maxNeighbours = 3;
        } else if (Nred == 4) {
            maxNeighbours = 5;
        }
        let B = GenerationsGeneralShips.generateRandomArray(1, maxNeighbours);
        if (B.length == 0) {
            B = [2];
        }
        let S = GenerationsGeneralShips.generateRandomArray(1, maxNeighbours);
        let I = GenerationsGeneralShips.generateRandomArray(1, maxNeighbours);

        // Remove integers from I that are in B or S
        I = I.filter(i => !B.includes(i) && !S.includes(i) && i != 2);
    
        // Convert arrays to strings and concatenate them to form the rule
        let rule = `N${N}/B${B.join('')}/S${S.join('')}/I${I.join('')}/${nStates}`;
    
        return rule;
    }
    
    static generateRandomArray(min, max) {
        let array = [];
        for (let i = min; i <= max; i++) {
            if (Math.random() < 0.5) {
                array.push(i);
            }
        }
        return array;
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

export class StochasticGenerations extends Generations{
    constructor(ruleString, flavour = null) {
        super(ruleString);
        if (flavour == "ships") {
            let ruleString = StochasticGenerations.generateRule(0);
            this.initialiseRule(ruleString);
            let index = Array.from(this.birth).indexOf(1);
            if (index !== -1) {
                let newArray = new Uint8Array(this.birth.length - 1);
                newArray.set(this.birth.subarray(0, index), 0);
                newArray.set(this.birth.subarray(index + 1), index);
                this.birth = newArray;
            }
            if (this.birth.indexOf(2) === -1) {
                let newArray = new Uint8Array(this.birth.length + 1);
                newArray[0] = 2;
                newArray.set(this.birth, 1);
                this.birth = newArray;
            }
            index = Array.from(this.survive).indexOf(1);
            if (index !== -1) {
                let newArray = new Uint8Array(this.survive.length - 1);
                newArray.set(this.survive.subarray(0, index), 0);
                newArray.set(this.survive.subarray(index + 1), index);
                this.survive = newArray;            
            }
            this.inhibited = this.inhibited.filter(i => !this.birth.includes(i) && !this.survive.includes(i) && i != 2);
            this.ruleString = `N${this.neighbourhood}/B${this.birth.join('')}/S${this.survive.join('')}/I${this.inhibited.join('')}/${this.nStates}`;

            this.activationFactor = 1.0;
            this.randomnessLogShift = 0.5;
        } else {
            this.activationFactor = 20/this.birth[0]**3;
            this.randomnessLogShift = 1.0;
        }

    }

    updateRule(cellValue, newCellValue, neighbourList, time, activityLevel) {
        var cellValueM4 = cellValue % this.nStates;
        if (cellValueM4 == 1 && this.survive.includes(neighbourList[0][this.neighbourhood])) {
            newCellValue = 1;
        } else if ((cellValueM4 > 0) && (cellValueM4 < this.nStates - 1)) {
            newCellValue += 1;
        } else if (cellValueM4 == this.nStates - 1) {
            newCellValue = 0;
        } else if ((cellValueM4 == 0) && (this.birth.includes(neighbourList[0][this.neighbourhood])) && Math.random() > this.activationFactor*activityLevel - 0.01) {
            newCellValue = 1;
        } else if ((cellValueM4 == 0) && (this.inhibited.includes(neighbourList[0][this.neighbourhood]))) {
            newCellValue = this.nStates - 1;
        }
        return newCellValue;
    }

}

export class GenerationsGeneralShips extends Generations{
    constructor(safe=true) {
        if (safe) {
            super(GenerationsGeneralShips.getPresetRule())
        } else {
            super(GenerationsGeneralShips.generateRule());
            this.randomnessLogShift = 0.0
        }
    }

    static getPresetRule() {
        let ruleWeights = {
            "N0/B2/S2/I13": 5,
            "N0/B2/S24/I36/7": 1,
            "N0/B2/S24/I36/9": 1,
            "N0/B2/S24/I36/10": 1,
            "N0/B2/S24/I36/11": 1,
            "N0/B2/S37/I1568/3": 1,
            "N0/B245/S347/I/5": 1,
            "B234568/S2458/I1/6": 1,
            "B234568/S2458/I1/7": 1,
            "B234568/S2458/I1/8": 1,
            "B234568/S2458/I1/9": 1,
            "B234568/S2458/I1/10": 1,
            "B234568/S2458/I1/11": 1,
            "B234568/S2458/I1/12": 1,
            "B234568/S2458/I1/13": 1,
            "B234568/S2458/I1/14": 1,
            "B234568/S4568/I1/4": 1,
            "B234568/S4568/I1/5": 1,
            "B234568/S458/I1/4": 1,
            "B234568/S458/I1/5": 1,
            "N0/B24568/S3478/I/4": 3,
            "N0/B24568/S3478/I/5": 1,
            "N0/B24568/S3478/I/6": 1,
            "N0/B24568/S3478/I/7": 1,
            "N0/B24568/S34578/I/9": 1,
            "N0/B24568/S34578/I/12": 1,
            "N0/B24568/S34578/I/13": 1,
            "N0/B24568/S34578/I/14": 1,
            "N0/B24568/S34678/I/4": 3, // Really good too
            "N0/B24568/S34678/I/5": 1,
            "N0/B24568/S34678/I/6": 1,
            "N0/B24568/S34678/I/7": 10, // Really good!
            "N0/B24568/S34678/I/8": 3,
            "N0/B24568/S34678/I/9": 1,
            "N0/B24568/S34678/I/10": 1,
            "N0/B24568/S34678/I/11": 1,
            "N0/B25/S345/I/4": 1,
            "N0/B25/S345/I/5": 1,
            "N0/B25/S345/I/6": 1,
            "N0/B2568/S345678/I/8": 1,
            "N0/B2568/S345678/I/10": 1,
            "N0/B2568/S345678/I/12": 1,
            "N0/B2568/S34578/I/4": 1,
            "N0/B2568/S34578/I/5": 1,
            "N0/B2568/S34578/I/6": 1,
            "N0/B2568/S34578/I/7": 1,
            "N0/B2568/S34578/I/8": 1,
            "N1/B2/S3/I/11": 1,
            "N1/B23468/S146/I5/12": 1,
            "N15/B23/S/I/5": 1,
            "N15/B23/S3/I/5": 1,
            "N15/B23/S3/I45/5": 1,
            "N15/B23/S35/I46/5": 1,
            "N15/B23/S36/I45/5": 1,
            "N15/B245/S347/I/5": 1,
            "N18/B234/S45/I13/6": 1,
            "N18/B2345/S457/I13/6": 1,
            "N19/B248/S457/I1/6": 1,
            "N20/B23/S3/I45/5": 1,
            "N20/B23/S3/I/5": 1,
            "N20/B245/S347/I/5": 1,
            "N30/B24/S23/I1/7": 1,
            "N30/B24/S23/I1/9": 1,
            "N30/B24/S23/I1/10": 1,
            "N30/B24/S23/I1/11": 1, 
            "N33/B23/S3/I/11": 1,
            "N42/B234/S345/I1/10": 1,
            "N47/B2/S25/I/11": 1,
        }
        let rule = createWeightedSampler(ruleWeights)();
        while (rule.split("/").length < 5) {
            if (rule[0] != "N") {
                rule = "N0/" + rule;
            } else {
                let nStates = Math.floor(Math.random() * 10) + 3;
                rule = rule + "/" + nStates;
            }
        }
        return rule;
    }

    getSeedingPatterns() {
        let shipsWeight = 1/5;
        let burstWeight = 1;
        let rakeWeight = 1;
        let starWeight = 1;
        //let stillLifeWeight = 1;
        let seedingPatterns = {
            random: {prob: 1, mask: null},
        };
        return seedingPatterns;
    }
}


export class GenerationsFlamingShips extends Generations{
    constructor() {
        super("B24/S34/I15678/4");
        this.randomnessLogShift = 0.0
    }

    getName() {
        return "FS";
    }

    getSeedingPatterns() {
        let shipsWeight = 1/5;
        let burstWeight = 1;
        let rakeWeight = 1;
        let starWeight = 1;
        //let stillLifeWeight = 1;
        let seedingPatterns = {
            random: {prob: 20, mask: null},
            burst1: {prob: burstWeight, mask: Grid.fromArray([[1,1],[1, 1]])},
            ships1: {prob: shipsWeight, mask: Grid.fromArray([[1, 1],])},
            rake1: {prob: rakeWeight, mask: Grid.fromArray([[1, 0], [1, 1]])},
            ships2: {prob: shipsWeight, mask: Grid.fromArray([[1, 1], [2, 2]])},
            star1: {prob: starWeight, mask: Grid.fromArray([[0, 1, 0], [1, 1, 1], [0, 1, 0]])},
            star2: {prob: starWeight, mask: Grid.fromArray([[1, 0, 1], [0, 0, 0], [1, 0, 1]])},
            ships3: {prob: shipsWeight, mask: Grid.fromArray([[1, 0, 0], [1, 1, 0], [0, 1, 1]])},
            ships4: {prob: shipsWeight, mask: Grid.fromArray([[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]])},
            burst2: {prob: burstWeight, mask: Grid.fromArray([[0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 1, 2, 0], 
                [3, 0, 1, 0, 0, 0, 1, 0, 3], [0, 0, 1, 1, 0, 1, 1, 1, 0], [0, 0, 1, 1, 0, 0, 1, 0, 0], [0, 0, 2, 0, 0, 3, 2, 1, 0]])},
            burst3: {prob: burstWeight, mask: Grid.fromArray([[0, 0, 0, 0, 0, 3, 2, 0], [0, 0, 1, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], 
                [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1], [0, 1, 0, 0, 0, 0, 1, 0]])},  
            rake2: {prob: rakeWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 3], [0, 0, 0, 1, 0, 2], [0, 0, 0, 0, 0, 1], 
                [0, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 1, 0]])}, 
            ships5: {prob: shipsWeight, mask: Grid.fromArray([[0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 1, 0, 3, 2, 0], [0, 1, 0, 2, 0, 1, 0, 0, 1, 0], 
                [0, 1, 2, 2, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0]])},
            ships6: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 1, 1, 3, 0, 1, 0], [0, 1, 0, 2, 2, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 0], 
                [0, 1, 0, 0, 0, 0, 3, 0]])},  
            ships7: {prob: shipsWeight, mask: Grid.fromArray([[0, 2, 3, 0, 0, 1, 0, 0, 0], [1, 0, 1, 1, 1, 1, 0, 3, 0], [0, 1, 1, 0, 0, 1, 1, 2, 1], 
                [0, 0, 1, 1, 1, 1, 0, 2, 1], [0, 1, 2, 0, 0, 0, 3, 0, 0]])},

        };
        return seedingPatterns;
    }
}


export class GenerationsStraightShips extends Generations{
    constructor() {
        super("B2/S245678/I1/4");
        this.randomnessLogShift = 0.0
    }

    getName() {
        return "SS";
    }

    getSeedingPatterns() {
        let shipsWeight = 1/5;
        let burstWeight = 1;
        //let stillLifeWeight = 1;
        let seedingPatterns = {
            random: {prob: 10, mask: null},
            burst1: {prob: burstWeight, mask: Grid.fromArray([[0, 1, 2, 1, 2, 1, 0], [1, 2, 0, 1, 0, 2, 1], [1, 2, 0, 1, 0, 2, 1], [0, 1, 2, 1, 2, 1, 0]])},
            ships1: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 1, 2, 0], 
                [3, 0, 1, 0, 0, 0, 1, 0, 3], [0, 0, 1, 1, 0, 1, 1, 1, 0], [0, 0, 1, 1, 0, 0, 1, 0, 0], [0, 0, 2, 0, 0, 3, 2, 1, 0]])},
            ships2: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 1, 0, 0], [0, 1, 2, 0, 1, 1, 1, 0], [1, 2, 3, 1, 1, 0, 1, 1], 
                [1, 2, 3, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 2, 0, 0]])},   
            ships3: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 0, 0, 0, 3, 2, 0], [0, 0, 1, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], 
                [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1], [0, 1, 0, 0, 0, 0, 1, 0]])},  
            ships4: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 3], [0, 0, 0, 1, 0, 2], [0, 0, 0, 0, 0, 1], 
                [0, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 1, 0]])}, 
            ships5: {prob: shipsWeight, mask: Grid.fromArray([[0, 1, 1, 2, 0], [2, 0, 1, 0, 3], [3, 1, 1, 1, 0], [0, 1, 0, 2, 1]])},
            ships6: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 0, 2, 0], [3, 0, 1, 1, 0], [2, 1, 1, 1, 3], [1, 0, 1, 0, 2], [0, 0, 0, 1, 0]])},
            burst2: {prob: burstWeight, mask: Grid.fromArray([[0, 1, 0, 0, 1, 0, 0, 0, 0, 0], [1, 1, 1, 2, 2, 1, 0, 3, 2, 0], [0, 1, 0, 2, 0, 1, 0, 0, 1, 0], 
                [0, 1, 2, 2, 1, 1, 1, 1, 1, 1], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0]])}, 
            ships7: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 3, 0, 0], [0, 0, 2, 0, 1, 0, 2, 1], [0, 0, 3, 1, 1, 1, 2, 1], 
                [0, 0, 1, 0, 1, 0, 3, 0], [3, 0, 1, 0, 1, 0, 0, 0], [2, 1, 1, 1, 3, 0, 0, 0], [1, 0, 1, 0, 2, 0, 0, 0], [0, 0, 0, 0, 1, 3, 0, 0]])}, 
            ships8: {prob: shipsWeight, mask: Grid.fromArray([[0, 0, 1, 1, 3, 0, 1, 0], [0, 1, 0, 2, 2, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 0], 
                [0, 1, 0, 0, 0, 0, 3, 0]])},  
            burst3: {prob: burstWeight, mask: Grid.fromArray([[0, 2, 3, 0, 0, 1, 0, 0, 0], [1, 0, 1, 1, 1, 1, 0, 3, 0], [0, 1, 1, 0, 0, 1, 1, 2, 1], 
                [0, 0, 1, 1, 1, 1, 0, 2, 1], [0, 1, 2, 0, 0, 0, 3, 0, 0]])},
            burst4: {prob: burstWeight, mask: Grid.fromArray([[0, 0, 0, 0, 3, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0, 0], 
                [0, 2, 3, 1, 1, 1, 3, 2, 0], [1, 0, 1, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1], [2, 0, 1, 0, 2, 0, 1, 0, 2], [0, 3, 0, 1, 0, 1, 0, 3, 0]])},    
            birst5: {prob: burstWeight, mask: Grid.fromArray([[0, 0, 0, 1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1], [2, 1, 1, 1, 1, 1, 1, 1, 2], 
                [0, 1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 0, 0, 1, 0, 0, 1, 0]])},  
        };
        return seedingPatterns;
    }
}



export class ConwayNoZero extends PrimaryRule{
    constructor() {
        super();
        this.nStates = 4;
        this.randomnessLogShift = 0.4
    }

    updateRule(cellValue, newCellValue, neighbourList, time) {
        var cellValueM4 = cellValue % 4;
        var sneighbours = neighbourList[0][0] + neighbourList[0][2];
        if ((cellValueM4 == 1 || cellValueM4 == 3) && (sneighbours < 2 || sneighbours > 3)) {
            newCellValue = 2;
        } else if ((cellValueM4 == 1 || cellValueM4 == 3) && (sneighbours == 2 || sneighbours == 3)) {
            newCellValue = 1;
        } else if ((cellValueM4 == 0 || cellValueM4 == 2) && sneighbours == 3) {
            newCellValue = 3;
        } else if (cellValueM4 == 2) {
            newCellValue = 0;
        }

        return newCellValue;
    }

    getSeedingPatterns() {
        //let gliderWeight = 1;
        let seedingPatterns = {
            void: {prob: 1, mask: null},
            //glider1: {prob: 0 * gliderWeight, mask: Grid.fromArray([[0, 1, 0], [1, 0, 0], [1, 1, 1]])},
            //glider2: {prob: gliderWeight, mask: Grid.fromArray([[0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1]])},
            //glider2: {prob: gliderWeight, mask: Grid.fromArray([[0, 1, 1, 1, 1], [1, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 0, 0, 1, 0]])},

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
