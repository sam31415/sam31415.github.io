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
    var lambda = globalData.gridHeight * globalData.gridWidth * (10 ** globalData.randomnessAmount);
    // Sample the number of events from a Poisson distribution
    var numEvents = poissonSample(lambda);
    for (var n = 0; n < numEvents; n++) {
        // Randomly select the coordinates for the event
        var i = Math.floor(Math.random() * globalData.gridHeight);
        var j = Math.floor(Math.random() * globalData.gridWidth);
        // Randomly select the type of event
        var rnd = Math.random();
        for (let k = 0; k < pop_masks.length; k++) {
            if (rnd < prob[k]) {
                console.log("Applying mask " + k);
                applyMask(newGrid, globalData, pop_masks[k], i, j, findNeighbour);
                break;
            }
        }
    }
    return { i, j };
}

export function applyMask(grid, globalData, mask, i, j, findNeighbour) {
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

// Random seeds
let pop1_mask = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let pop2_mask = [[1, 0, 1], [0, 1, 0], [1, 0, 1]];
let pop3_mask = pop2_mask.map(row => row.map(val => 1 - val));
//let pop4_mask = [[1, 1, 0], [1, 1, 0], [0, 0, 0]];
let pop5_mask = [[0, 0, 0], [1, 1, 0], [0, 0, 0]];
let pop6_mask = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
let pop7_mask = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];

export let pop_masks = [pop1_mask, pop2_mask, pop3_mask, pop5_mask, pop6_mask, pop7_mask];

export let prob = [0.3, 0.6, 0.9, 0.925, 0.95, 1];

