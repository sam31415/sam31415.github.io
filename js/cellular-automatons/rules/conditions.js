import { createWeightedSampler } from "../randomness/weightedSampler.js";
import { neighborTypeNumbers } from "../neighbors/neighbourCount.js";

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
        return neighborList[neighborType[0]][neighborType[1]] == threshold;
    }
    function conditionNeighborBiggerValue(neighborList) {
        return neighborList[neighborType[0]][neighborType[1]] > threshold;
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
        return `${this.type}${this.threshold}${this.inactivation}NT${this.neighborType[0]}|${this.neighborType[1]}`
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
        var neighborType = restOfName.split('|').map(Number);;

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
            neighborTypes = {0: 2/3, 1: 1/3};
        }
        var neighborTypeSampler = createWeightedSampler(neighborTypes);
        const neighborType0 = neighborTypeSampler();
        const neighborType = [neighborType0, Math.floor(Math.random() * neighborTypeNumbers[neighborType0])];

        // Create a new Condition with the random values
        return new Condition(type, threshold, neighborType, inactivation, modulo);
    }
}


