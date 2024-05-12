import { Grid } from '../classes/grid.js';

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

export function addRandomEvents(globalData, newGrid, findNeighbour) {
    var lambda = (10 ** globalData.randomnessAmount);
    // Sample the number of events from a Poisson distribution
    var numEvents = poissonSample(lambda);
    var sampler = globalData.ruleClass.ruleChain[0].seedSampler;
    var masks = globalData.ruleClass.ruleChain[0].seedMasks;
    for (var n = 0; n < numEvents; n++) {
        // Randomly select the coordinates for the event
        var i = Math.floor(Math.random() * globalData.gridHeight);
        var j = Math.floor(Math.random() * globalData.gridWidth);
        // Randomly select the type of event
        var mask = null;
        if (Math.random() < 0.5) {
            mask = masks[sampler()];
        }
        applyMask(newGrid, globalData, mask, i, j, findNeighbour);
    }
}

export function applyMask(grid, globalData, mask, i, j, findNeighbour) {
    if (mask === null) {
        mask = generateRandomMask();
    } else {
        if (Math.random() < 0.5) {
            mask.transpose();
        }
        if (Math.random() < 0.5) {
            mask.flipX();
        }
        if (Math.random() < 0.5) {
            mask.flipY();
        }
    }
    let maskHeight = mask.height;
    let maskWidth = mask.width;

    for (let mi = 0; mi < maskHeight; mi++) {
        for (let mj = 0; mj < maskWidth; mj++) {
            // Calculate the grid coordinates with periodic boundary conditions
            let di = mi - Math.floor(maskHeight / 2);
            let dj = mj - Math.floor(maskWidth / 2);
            let neighbour = findNeighbour(globalData, i, j, di, dj);
            // Apply the mask
            grid.set(neighbour[0], neighbour[1], mask.get(mi,mj));

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
    return new Grid(mask);
}


