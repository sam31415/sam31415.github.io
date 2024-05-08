import { createWeightedSampler } from "../randomness/weightedSampler.js";
import { neighbourTypeNumbers, sampleNeighbourhoodGeometry, MIX } from "../neighbours/neighbourCount.js";

const INACTIVEABS = "A";
const INACTIVECOND = "C";
const INACTIVENONE = "N";

const COMPAREEQ = "E";
const COMPAREBIGGER = "B";

export function conditionInactive(variation, modulo) {
    function conditionInactiveCondFunction(cellValue) {
        return cellValue == 0;
    }
    function conditionInactiveAbsFunction(cellValue) {
        return cellValue % modulo == 0;
    }
    function noCondition(cellValue) {
        return true;
    }
    if (variation == INACTIVECOND) {
        return conditionInactiveCondFunction;
    } else if (variation == INACTIVEABS) {
        return conditionInactiveAbsFunction;
    } else {
        return noCondition;
    }
}

export function conditionNeighbour(threshold, type, neighbourType) {
    function conditionNeighbourEqValue(neighbourList) {
        return neighbourList[neighbourType[0]][neighbourType[1]] == threshold;
    }
    function conditionNeighbourBiggerValue(neighbourList) {
        return neighbourList[neighbourType[0]][neighbourType[1]] > threshold;
    }
    if (type == COMPAREEQ) {
        return conditionNeighbourEqValue;
    } else if (type == COMPAREBIGGER) {
        return conditionNeighbourBiggerValue;
    }
}

export function conditionPeriodicity(periodicity) {
    let testPeriodicity;
    if (periodicity == null) {
        testPeriodicity = function(time) {
            return true;
        }
    } else {
        testPeriodicity = function(time) {
            return periodicity[time % periodicity.length];
        }
    }
    return testPeriodicity;
}


export class Condition {
    constructor(type, threshold, neighbourType, inactivation, modulo, periodicity = null) {
        this.type = type;
        this.threshold = threshold;
        this.neighbourType = neighbourType;
        this.inactivation = inactivation;
        this.modulo = modulo;
        this.periodicity = periodicity;

        this.testInactive = conditionInactive(this.inactivation, this.modulo);
        this.testValue = conditionNeighbour(this.threshold, this.type, this.neighbourType);
        this.testPeriodicity = conditionPeriodicity(periodicity);
    }

    test(neighbourList, cellValue, time) {
        var test = this.testPeriodicity(time)
        return this.testValue(neighbourList) && this.testInactive(cellValue) && test;
    }

    name() {
        var periodicityString = '';
        if (this.periodicity != null) {
            periodicityString = this.periodicity.map(b => b ? '1' : '0').join('');
        }
        return `${this.type}${this.threshold}${this.inactivation}[${this.neighbourType[0]}|${this.neighbourType[1]}]${periodicityString}`;
    }

    static fromName(name, modulo = 4) {
        var type = null;
        if (name.startsWith(COMPAREEQ)) {
            type = COMPAREEQ;
        } else if (name.startsWith(COMPAREBIGGER)) {
            type = COMPAREBIGGER;
        }
        var restOfName = name.substring(type.length);
        var threshold = parseInt(restOfName.substring(0, 1));
        restOfName = restOfName.substring(1);
        var inactivation = null;
        if (restOfName.startsWith(INACTIVECOND)) {
            inactivation = INACTIVECOND;
        } else if (restOfName.startsWith(INACTIVEABS)) {
            inactivation = INACTIVEABS;
        } else if (restOfName.startsWith(INACTIVENONE)) {
            inactivation = INACTIVENONE;
        }
        restOfName = restOfName.substring(inactivation.length);
        var neighbourType = restOfName.split('[')[1].split(']')[0].split('|').map(Number);
        restOfName = restOfName.split(']')[1];
        var periodicity = null;
        if (restOfName.length > 0) {
            periodicity = restOfName.split('').map(b => b === '1');
        }
        return new Condition(type, threshold, neighbourType, inactivation, modulo, periodicity);
    }

    static randomSample(neighbourTypes = null, modulo = 4, geometryType = MIX, periodicityLength = null) {
        // Generate a random type
        const types = [COMPAREEQ, COMPAREBIGGER];
        const type = types[Math.floor(Math.random() * types.length)];

        // Generate a random threshold
        var threshold = 0;
        if (type === COMPAREBIGGER) {
            threshold = Math.floor(Math.random() * 9);
        } else {
            threshold = Math.floor(Math.random() * 8) + 1;
        }
        
        // Generate a random inactive variation
        const inactivations = [INACTIVECOND, INACTIVEABS, INACTIVENONE];
        const inactivation = inactivations[Math.floor(Math.random() * inactivations.length)];

        // Generate a random neighbour type
        if (neighbourTypes === null) {
            neighbourTypes = {0: 2/3, 1: 1/3};
        }
        var neighbourTypeSampler = createWeightedSampler(neighbourTypes);
        const neighbourType0 = neighbourTypeSampler();
        const neighbourType1 = sampleNeighbourhoodGeometry(neighbourType0, geometryType);
        const neighbourType = [neighbourType0, neighbourType1];

        // Generate a random periodicity
        var periodicityDraw = Math.random();
        if (periodicityDraw < 0.5) {
            periodicity = null;
        } else {
            if (periodicityLength == null) {
                periodicityLength = Math.floor(Math.random() * 4) + 2;
            }
            var periodicity;
            do {
                periodicity = new Array(periodicityLength).fill(0).map(() => Math.random() < 0.5);
            } while (!periodicity.includes(true)); 
        }

        // Create a new Condition with the random values
        return new Condition(type, threshold, neighbourType, inactivation, modulo, periodicity);
    }
}

// BB-E7N[0|1]11||B5A[0|0]11||E2N[1|1]11||B3C[1|3]||B3C[0|2]11||E7N[0|3]11
