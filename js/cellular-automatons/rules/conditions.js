export function conditionInactive(variation) {
    function conditionInactiveCondFunction(cellValue) {
        return cellValue == 0;
    }
    function conditionInactiveAbsFunction(cellValue) {
        return cellValue % 4 == 0;
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
    constructor(type, threshold, neighborType, inactivation) {
        this.type = type;
        this.threshold = threshold;
        this.neighborType = neighborType;
        this.inactivation = inactivation;

        this.testInactive = conditionInactive(this.inactivation);
        this.testValue = conditionNeighbor(this.threshold, this.type, this.neighborType);
    }

    test(neighborList, cellValue) {
        return this.testValue(neighborList) && this.testInactive(cellValue);
    }

    name() {
        return `${this.type}${this.threshold}${this.inactivation}NT${this.neighborType}`
    }

    static randomSample(neighborTypes = null) {
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
            neighborTypes = [0, 1, 2, 3, 4, 5, 6, 7];
        }
        const neighborType = neighborTypes[Math.floor(Math.random() * neighborTypes.length)];

        // Create a new Condition with the random values
        return new Condition(type, threshold, neighborType, inactivation);
    }
}

export function sampleMultipleConditions(nConditions, safe = true) {
    var conditions = [];
    var neighborTypes = null;
    if (safe) {
        neighborTypes = [0, 1, 2];
    }
    for (let i = 0; i < nConditions; i++) {
        conditions.push(Condition.randomSample(neighborTypes));
    }
    return conditions;
}