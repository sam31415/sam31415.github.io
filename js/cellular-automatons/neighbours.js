
export function findNeighbourFlipXY(globalData, i, j, di, dj) {
    let ni = (i + di + globalData.gridHeight) % globalData.gridHeight;
    let nj = (j + dj + globalData.gridWidth) % globalData.gridWidth;
    let nni = ni;
    let nnj = nj;
    if (ni - i - di > 0) {
        nnj = (globalData.gridWidth - nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    } else if (ni - i - di < 0) {
        nnj = (globalData.gridWidth - nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    }
    if (nj - j - dj > 0) {
        nni = (globalData.gridHeight - ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    } else if (nj - j - dj < 0) {
        nni = (globalData.gridHeight - ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    }
    return [nni, nnj];
}

export function findNeighbourFlipX(globalData, i, j, di, dj) {
    let ni = (i + di + globalData.gridHeight) % globalData.gridHeight;
    let nj = (j + dj + globalData.gridWidth) % globalData.gridWidth;
    let nni = ni;
    let nnj = nj;
    if (ni - i - di > 0) {
        nnj = (globalData.gridWidth - nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    } else if (ni - i - di < 0) {
        nnj = (globalData.gridWidth - nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    }
    if (nj - j - dj > 0) {
        nni = (ni + globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    } else if (nj - j - dj < 0) {
        nni = (ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    }
    return [nni, nnj];
}

export function findNeighbourFlipY(globalData, i, j, di, dj) {
    let ni = (i + di + globalData.gridHeight) % globalData.gridHeight;
    let nj = (j + dj + globalData.gridWidth) % globalData.gridWidth;
    let nni = ni;
    let nnj = nj;
    if (ni - i - di > 0) {
        nnj = (nj + globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    } else if (ni - i - di < 0) {
        nnj = (nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    }
    if (nj - j - dj > 0) {
        nni = (globalData.gridHeight - ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    } else if (nj - j - dj < 0) {
        nni = (globalData.gridHeight - ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    }
    return [nni, nnj];
}

export function findNeighbourNoFlip(globalData, i, j, di, dj) {
    let ni = (i + di + globalData.gridHeight) % globalData.gridHeight;
    let nj = (j + dj + globalData.gridWidth) % globalData.gridWidth;
    let nni = ni;
    let nnj = nj;
    if (ni - i - di > 0) {
        nnj = (nj + globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    } else if (ni - i - di < 0) {
        nnj = (nj - globalData.gridPeriodicityShiftX + globalData.gridWidth) % globalData.gridWidth;
    }
    if (nj - j - dj > 0) {
        nni = (ni + globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    } else if (nj - j - dj < 0) {
        nni = (ni - globalData.gridPeriodicityShiftY + globalData.gridHeight) % globalData.gridHeight;
    }
    return [nni, nnj];
}

