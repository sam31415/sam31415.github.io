
// Random seeds
let pop1_mask = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let pop2_mask = [[1, 0, 1], [0, 1, 0], [1, 0, 1]];
let pop3_mask = pop2_mask.map(row => row.map(val => 1 - val));
//let pop4_mask = [[1, 1, 0], [1, 1, 0], [0, 0, 0]];
let pop5_mask = [[0, 0, 0], [1, 1, 0], [0, 0, 0]];
let pop6_mask = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
let pop7_mask = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];
let pop_masks = [pop1_mask, pop2_mask, pop3_mask, pop5_mask, pop6_mask, pop7_mask];
let prob = [0.3, 0.6, 0.9, 0.925, 0.95, 1.0];




// Initialize the grid randomly
export function initializeGrid(globalData) {
    globalData.grid = new Array(globalData.gridHeight);
    for (var i = 0; i < globalData.gridHeight; i++) {
        globalData.grid[i] = new Array(globalData.gridWidth);
        for (var j = 0; j < globalData.gridWidth; j++) {
            var rnd = Math.random();
            globalData.grid[i][j] = 0
            globalData.grid[i][j] = rnd < 0.75 ? 1 : globalData.grid[i][j];
            globalData.grid[i][j] = rnd < 0.5 ? 2 : globalData.grid[i][j];
            globalData.grid[i][j] = rnd < 0.25 ? 3 : globalData.grid[i][j];
        }
    }
}


export function gameLoop(globalData) {
    drawGrid(globalData);
    updateGrid(globalData);
    setTimeout(function() {
        requestAnimationFrame(() => gameLoop(globalData));
    }, globalData.timeout);
}


function drawGrid(globalData) {
    let canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            ctx.fillStyle = globalData.superActivatedColor;
            if (globalData.grid[i][j] == 0) {
                ctx.fillStyle = globalData.backgroundColor;
            } else if (globalData.grid[i][j] == 1) {
                ctx.fillStyle = globalData.activatedColor;
            } else if (globalData.grid[i][j] == 2) {
                ctx.fillStyle = globalData.deadColor;
            } else if (globalData.grid[i][j] > 3) {
                ctx.fillStyle = globalData.deadColor;
            }
            ctx.fillRect(i * globalData.cellSize, j * globalData.cellSize, globalData.cellSize, globalData.cellSize);
        }
    }
}


function updateGrid(globalData) {
    var newGrid = new Array(globalData.gridHeight);
    for (var i = 0; i < globalData.gridHeight; i++) {
        newGrid[i] = new Array(globalData.gridWidth);
        for (var j = 0; j < globalData.gridWidth; j++) {
            var neighbors = 0;
            var sneighbors = 0;  // not used
            for (var di = -1; di <= 1; di++) {
                for (var dj = -1; dj <= 1; dj++) {
                    if (di == 0 && dj == 0) continue;
                    let neighbourCoord = findNeighbour(globalData, i, j, di, dj);
                    let ni = neighbourCoord[0];
                    let nj = neighbourCoord[1];
                    if (globalData.grid[ni][nj] == 1) {
                        neighbors += 1;
                        sneighbors += 1;
                    } else if (globalData.grid[ni][nj] == 3) {
                        sneighbors += 1;
                    }
                }
            }
            if (globalData.grid[i][j] == 1 || globalData.grid[i][j] == 3) {
                newGrid[i][j] = 2;
            } else if (globalData.grid[i][j] == 2) {
                newGrid[i][j] = 0;
            } else if (globalData.grid[i][j] == 0 && neighbors == 2) {
                newGrid[i][j] = 1;
            } else if (globalData.grid[i][j] == 0 && neighbors > 2) {
                newGrid[i][j] = 3;
            } else {
                newGrid[i][j] = 0;
            }
        }
    }
    if (globalData.addRandomness) {
        for (var i = 0; i < globalData.gridHeight; i++) {
            for (var j = 0; j < globalData.gridWidth; j++) {
                var rnd1 = Math.random();
                if (rnd1 < 10 ** globalData.randomnessAmount) {
                    var rnd2 = Math.random();
                    for (let k = 0; k < pop_masks.length; k++) {
                        if (rnd2 < prob[k]) {
                            console.log("Applying mask " + k);
                            applyMask(newGrid, globalData, pop_masks[k], i, j);
                            break;
                        }
                    }
                }
            }
        }
    }
    globalData.grid = newGrid;
}


function findNeighbour(globalData, i, j, di, dj) {
    let ni = (i + di + globalData.gridHeight) % globalData.gridHeight;
    let nj = (j + dj + globalData.gridWidth) % globalData.gridWidth;
    let nni = ni;
    let nnj = nj;
    if (ni - i - di > 0) {
        if (globalData.gridFlipX) {
            nnj = (globalData.gridWidth-nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
        } else {
            nnj = (nj + globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
        }
    } else if (ni - i - di < 0) {
        if (globalData.gridFlipX) {
            nnj = (globalData.gridWidth-nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
        } else {
            nnj = (nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
        }
    } 
    if (nj - j - dj > 0) {
        if (globalData.gridFlipY) {
            nni = (globalData.gridHeight-ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
        } else {
            nni = (ni + globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
        }
    } else if (nj - j - dj < 0) {
        if (globalData.gridFlipY) {
            nni = (globalData.gridHeight-ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
        } else {
            nni = (ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
        }
    }

    return [nni, nnj];
}

function applyMask(grid, globalData, mask, i, j) {
    let maskHeight = mask.length;
    let maskWidth = mask[0].length;

    for (let mi = 0; mi < maskHeight; mi++) {
        for (let mj = 0; mj < maskWidth; mj++) {
            // Calculate the grid coordinates with periodic boundary conditions
            let di = mi - Math.floor(maskHeight / 2)
            let dj = mj - Math.floor(maskWidth / 2)
            let neighbour = findNeighbour(globalData, i, j, di, dj);
            // Apply the mask
            grid[neighbour[0]][neighbour[1]] = mask[mi][mj];
        }
    }
}