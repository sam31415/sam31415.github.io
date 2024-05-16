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
    var lambda = (10 ** (globalData.randomnessAmount + globalData.ruleClass.ruleChain[0].randomnessLogShift));
    // Sample the number of events from a Poisson distribution
    var numEvents = poissonSample(lambda);
    var sampler = globalData.ruleClass.ruleChain[0].seedSampler;
    var masks = globalData.ruleClass.ruleChain[0].seedMasks;
    for (var n = 0; n < numEvents; n++) {
        // Randomly select the coordinates for the event
        var i = Math.floor(Math.random() * globalData.gridHeight);
        var j = Math.floor(Math.random() * globalData.gridWidth);
        // Randomly select the type of event
        var mask = masks[sampler()];
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
    let mask;
    if (Math.random() < 0.7) {
        mask = generateSquareMask(maskHeight);
    } else {
        let maskWidth = Math.floor(Math.random() * 10) + 1;
        mask = generateRectangularMask(maskHeight, maskWidth);
    }

    return mask;
}

function generateSquareMask(maskSize) {
    let rnd = Math.random();
    if (rnd < 0.1) {
        return nonSymmetricRandomMask(maskSize, maskSize);
    } else if (rnd < 0.2) {
        return p2hSymmetricRandomMask(maskSize, maskSize);
    } else if (rnd < 0.3) {
        return p2vSymmetricRandomMask(maskSize, maskSize);
    } else if (rnd < 0.4) {
        return d2aSymmetricRandomMask(maskSize);
    } else if (rnd < 0.5) {
        return d2bSymmetricRandomMask(maskSize);
    } else if (rnd < 0.6) {
        return g2SymmetricRandomMask(maskSize, maskSize);
    } else if (rnd < 0.7) {
        return p4SymmetricRandomMask(maskSize, maskSize);
    } else if (rnd < 0.8) {
        return d4SymmetricRandomMask(maskSize);
    } else if (rnd < 0.9) {
        return g4SymmetricRandomMask(maskSize);
    } else {
        return r8SymmetricRandomMask(maskSize);
    }
}

function generateRectangularMask(maskHeight, maskWidth) {
    let rnd = Math.random();
    if (rnd < 0.2) {
        return nonSymmetricRandomMask(maskHeight, maskWidth);
    } else if (rnd < 0.4) {
        return p2hSymmetricRandomMask(maskHeight, maskWidth);
    } else if (rnd < 0.6) {
        return p2vSymmetricRandomMask(maskHeight, maskWidth);
    } else if (rnd < 0.8) {
        return g2SymmetricRandomMask(maskHeight, maskWidth);
    } else {
        return p4SymmetricRandomMask(maskHeight, maskWidth);
    }
}


function p2vSymmetricRandomMask(maskHeight, maskWidth) {
    let mask = new Grid(maskWidth, maskHeight);
    for (let i = 0; i < maskHeight; i++) {
        for (let j = 0; j < Math.ceil(maskWidth/2); j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(i, maskWidth - 1 - j, mask.get(i,j));
        }
    }

    return mask;
}

function p2hSymmetricRandomMask(maskHeight, maskWidth) {
    let mask = new Grid(maskWidth, maskHeight);
    for (let i = 0; i < Math.ceil(maskHeight/2); i++) {
        for (let j = 0; j < maskWidth; j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(maskHeight - 1 - i, j, mask.get(i,j));
        }
    }

    return mask;
}

function d2aSymmetricRandomMask(maskSize) {
    let mask = new Grid(maskSize, maskSize);
    for (let i = 0; i < maskSize; i++) {
        for (let j = i; j < maskSize; j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(j, i, mask.get(i,j));
        }
    }

    return mask;
}

function d2bSymmetricRandomMask(maskSize) {
    let mask = new Grid(maskSize, maskSize);
    for (let i = 0; i < maskSize; i++) {
        for (let j = i; j < maskSize; j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(maskSize - 1 - j, maskSize - 1 - i, mask.get(i,j));
        }
    }

    return mask;
}

function g2SymmetricRandomMask(maskHeight, maskWidth) {
    let mask = new Grid(maskWidth, maskHeight);
    for (let i = 0; i < maskHeight; i++) {
        for (let j = 0; j < Math.ceil(maskWidth/2); j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(maskHeight - 1 - i, maskWidth - 1 - j, mask.get(i,j));

        }
    }

    return mask;
}

function p4SymmetricRandomMask(maskHeight, maskWidth) {
    let mask = new Grid(maskWidth, maskHeight);
    for (let i = 0; i < Math.ceil(maskHeight/2); i++) {
        for (let j = 0; j < Math.ceil(maskWidth/2); j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(maskHeight - 1 - i, j, mask.get(i,j));
            mask.set(i, maskWidth - 1 - j, mask.get(i,j));
            mask.set(maskHeight - 1 - i, maskWidth - 1 - j, mask.get(i,j));
        }
    }

    return mask;
}

function d4SymmetricRandomMask(maskSize) {
    let mask = new Grid(maskSize, maskSize);
    for (let i = 0; i < maskSize; i++) {
        for (let j = Math.max(i, maskSize - i); j < maskSize; j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(j, i, mask.get(i,j));
            mask.set(maskSize - 1 - j, maskSize - 1 - i, mask.get(i,j));
            mask.set(maskSize - 1 - i, maskSize - 1 - j, mask.get(i,j));
        }
    }

    return mask;
}

function g4SymmetricRandomMask(maskSize) {
    let mask = new Grid(maskSize, maskSize);
    for (let i = 0; i < Math.ceil(maskSize/2); i++) {
        for (let j = 0; j < Math.ceil(maskSize/2); j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(j, maskSize - 1 - i, mask.get(i,j));
            mask.set(maskSize - 1 - i, maskSize - 1 - j, mask.get(i,j));
            mask.set(maskSize - 1 - j, i, mask.get(i,j));
        }
    }

    return mask;
}

function r8SymmetricRandomMask(maskSize) {
    let mask = new Grid(maskSize, maskSize);
    for (let i = 0; i < Math.ceil(maskSize/2); i++) {
        for (let j = 0; j < Math.ceil(maskSize/2); j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
            mask.set(j, maskSize - 1 - i, mask.get(i,j));
            mask.set(maskSize - 1 - i, maskSize - 1 - j, mask.get(i,j));
            mask.set(maskSize - 1 - j, i, mask.get(i,j));
            mask.set(maskSize - 1 - i, j, mask.get(i,j));
            mask.set(maskSize - 1 - j, maskSize - 1 - i, mask.get(i,j));
            mask.set(i, maskSize - 1 - j, mask.get(i,j));
            mask.set(j, i, mask.get(i,j));
        }
    }

    return mask;
}

function nonSymmetricRandomMask(maskHeight, maskWidth) {
    let mask = new Grid(maskWidth, maskHeight);
    for (let i = 0; i < maskHeight; i++) {
        for (let j = 0; j < maskWidth; j++) {
            mask.set(i, j, Math.floor(Math.random() * 100000));
        }
    }

    return mask;
}
