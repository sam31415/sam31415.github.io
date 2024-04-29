import { createWeightedSampler } from "./weightedSampler.js";

let maskDefinitions = {
    // shortStar0: {prob: 4, mask: [[1, 0], [0, 1]]},
    // shortStar1: {prob: 4, mask: [[0, 1], [1, 0]]},
    // shortStar2: {prob: 4, mask: [[1, 0], [0, 1]]},
    waveSquare: {prob: 0.1, mask: [[1, 1], [1, 1]]},
    // waveHorizontal: {prob: 0.5, mask: [[0, 0], [1, 1]]},
    // waveVertical: {prob: 0.5, mask: [[0, 1], [0, 1]]},
    star: {prob: 1, mask: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]},
    // spaceshipE: {prob: 2, mask: [[1, 1], [2, 2]]},
    // spaceshipN: {prob: 2, mask: [[1, 2], [1, 2]]},
    // spaceshipW: {prob: 2, mask: [[2, 2], [1, 1]]},
    // spaceshipS: {prob: 2, mask: [[2, 1], [2, 1]]},
    // oscillator: {prob: 4, mask: [[0, 0, 1, 0], [1, 2, 2, 0], [0, 2, 2, 1], [0, 1, 0, 0]]},
    // gliderSE: {prob: 1, mask: [[0, 0, 1, 2], [0, 2, 0, 0], [1, 2, 1, 0]]},
    // gliderNE: {prob: 1, mask: [[2, 1, 0, 0], [0, 0, 2, 0], [0, 1, 2, 1]]},
    // gliderSW: {prob: 1, mask: [[1, 2, 1, 0], [0, 2, 0, 0], [0, 0, 1, 2]]},
    // gliderNW: {prob: 1, mask: [[0, 1, 2, 1], [0, 0, 2, 0], [2, 1, 0, 0]]},
    random2: {prob: 40, mask: null}
};

let masks = Object.keys(maskDefinitions).map(key => maskDefinitions[key].mask);
let maskProb = Object.keys(maskDefinitions).map(key => maskDefinitions[key].prob);
let maskSampler = createWeightedSampler(maskProb);

// Function to sample from a Poisson distribution
export function poissonSample(lambda) {
    var L = Math.exp(-lambda);
    var p = 1;
    var k = 0;
    do {
        k++;
        p *= Math.random();
    } while (p > L);
    return k - 1;
}

export function addRandomEvents(globalData, i, j, newGrid, findNeighbour) {
    var lambda = (10 ** globalData.randomnessAmount);
    // Sample the number of events from a Poisson distribution
    var numEvents = poissonSample(lambda);
    for (var n = 0; n < numEvents; n++) {
        // Randomly select the coordinates for the event
        var i = Math.floor(Math.random() * globalData.gridHeight);
        var j = Math.floor(Math.random() * globalData.gridWidth);
        // Randomly select the type of event
        var mask = masks[maskSampler()];
        applyMask(newGrid, globalData, mask, i, j, findNeighbour);
    }
    return { i, j };
}

export function applyMask(grid, globalData, mask, i, j, findNeighbour) {
    if (mask === null) {
        mask = generateRandomMask();
    }
    let maskHeight = mask.length;
    let maskWidth = mask[0].length;

    for (let mi = 0; mi < maskHeight; mi++) {
        for (let mj = 0; mj < maskWidth; mj++) {
            // Calculate the grid coordinates with periodic boundary conditions
            let di = mi - Math.floor(maskHeight / 2);
            let dj = mj - Math.floor(maskWidth / 2);
            let neighbour = findNeighbour(globalData, i, j, di, dj);
            // Apply the mask
            grid.set(neighbour[0], neighbour[1], mask[mi][mj]);

        }
    }
}

function generateRandomMask() {
    let maskHeight = Math.floor(Math.random() * 10) + 1;
    let maskWidth = Math.floor(Math.random() * 10) + 1;
    let mask = [];
    for (let i = 0; i < maskHeight; i++) {
        mask.push([]);
        for (let j = 0; j < maskWidth; j++) {
            mask[i].push(Math.floor(Math.random() * 4));
        }
    }
    return mask;
}


