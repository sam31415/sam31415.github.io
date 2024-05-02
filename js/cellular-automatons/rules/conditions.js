import { createWeightedSampler } from "../randomness/weightedSampler.js";

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
    if (variation == "Cond") {
        return conditionInactiveCondFunction;
    } else if (variation == "Abs") {
        return conditionInactiveAbsFunction;
    } else {
        return noCondition;
    }
}

export function conditionNeighbor(threshold, type, neighborType) {
    function conditionNeighborEqValue(neighborList) {
        return neighborList[neighborType] == threshold;
    }
    function conditionNeighborBiggerValue(neighborList) {
        return neighborList[neighborType] > threshold;
    }
    if (type == 'Eq') {
        return conditionNeighborEqValue;
    } else if (type == 'Bigger') {
        return conditionNeighborBiggerValue;
    }
}


export class Condition {
    constructor(type, threshold, neighborType, inactivation, modulo) {
        this.type = type;
        this.threshold = threshold;
        this.neighborType = neighborType;
        this.inactivation = inactivation;
        this.modulo = modulo;

        this.testInactive = conditionInactive(this.inactivation, this.modulo);
        this.testValue = conditionNeighbor(this.threshold, this.type, this.neighborType);
    }

    test(neighborList, cellValue) {
        return this.testValue(neighborList); // && this.testInactive(cellValue);
    }

    name() {
        return `${this.type}${this.threshold}${this.inactivation}NT${this.neighborType}`
    }

    static fromName(name, modulo = 4) {
        var type = null;
        if (name.startsWith('Eq')) {
            type = "Eq";
        } else if (name.startsWith('Bigger')) {
            type = "Bigger";
        }
        var restOfName = name.substring(type.length);
        var threshold = parseInt(restOfName.substring(0, 1));
        restOfName = restOfName.substring(1);
        var inactivation = null;
        if (restOfName.startsWith('Cond')) {
            inactivation = 'Cond';
        } else if (restOfName.startsWith('Abs')) {
            inactivation = 'Abs';
        } else if (restOfName.startsWith('None')) {
            inactivation = 'None';
        }
        restOfName = restOfName.substring(inactivation.length);
        var neighborType = parseInt(restOfName.substring(2));

        return new Condition(type, threshold, neighborType, inactivation, modulo);
    }

    static randomSample(neighborTypes = null, modulo = 4) {
        // Generate a random type
        const types = ['Eq', 'Bigger'];
        const type = types[Math.floor(Math.random() * types.length)];

        // Generate a random threshold
        var threshold = 0;
        if (type === 'Eq') {
            threshold = Math.floor(Math.random() * 8) + 1;
        } else {
            threshold = Math.floor(Math.random() * 9);
        }
        
        // Generate a random inactive variation
        const inactivations = ['Cond', 'Abs', 'None'];
        const inactivation = inactivations[Math.floor(Math.random() * inactivations.length)];

        // Generate a random neighbor type
        if (neighborTypes === null) {
            neighborTypes = {0: 1/8, 1: 1/8, 2: 1/8, 3: 1/8, 4: 1/8, 5: 1/8, 6: 1/8, 7: 1/8};
            //neighborTypes = {0: 0.25, 1: 0.25, 2: 0.25, 3: 0.05, 4: 0.05, 5: 0.05, 6: 0.05, 7: 0.05};
        }
        var neighborTypeSampler = createWeightedSampler(neighborTypes);
        const neighborType = neighborTypeSampler();

        // Create a new Condition with the random values
        return new Condition(type, threshold, neighborType, inactivation, modulo);
    }
}

