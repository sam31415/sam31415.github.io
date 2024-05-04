export const neighbourTypeNumbers = [44, 44]

export function computeNeighbourList(globalData, i, j, neighbours, maskVariables) {
    for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {
            if (di == 0 && dj == 0) continue;
            maskVariables[0] = (Math.abs(di) + Math.abs(dj)) % 2;
            maskVariables[(globalData.time % 4) + 1] = (di == -1) ? 1 : 0;
            maskVariables[((1 + globalData.time) % 4) + 1] = (dj == -1) ? 1 : 0;
            maskVariables[((2 + globalData.time) % 4) + 1] = (di == 1) ? 1 : 0;
            maskVariables[((3 + globalData.time) % 4) + 1] = (dj == 1) ? 1 : 0;
            let neighbourCoord = globalData.findNeighbour(globalData, i, j, di, dj);
            let ni = neighbourCoord[0];
            let nj = neighbourCoord[1];
            let gridValue = globalData.grid.get(ni, nj);
            let gridValueMod4 = gridValue % 4;
            let gridValueDiv4 = Math.floor((gridValue % 16) / 4);
            if (gridValueMod4 == 1) {
                neighbours[0][0] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[0][4 + 8*k] += maskVariables[k];
                    neighbours[0][8*(k+1)] += 1 - maskVariables[k];
                }
            } else if (gridValueMod4 == 2) {
                neighbours[0][2] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[0][4 + 8*k + 2] += maskVariables[k];
                    neighbours[0][8*(k+1) + 2] += 1 - maskVariables[k];
                }
            } else if (gridValueMod4 == 3) {
                neighbours[0][3] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[0][4 + 8*k + 3] += maskVariables[k];
                    neighbours[0][8*(k+1) + 3] += 1 - maskVariables[k];
                }
            }
            neighbours[0][1] = neighbours[0][0] + neighbours[0][3];
            for (var k = 0; k < maskVariables.length + 1; k++) {
                neighbours[0][4*k + 1] += neighbours[0][4*k] + neighbours[0][4*k + 3];
            }
            if (Math.floor(gridValueDiv4 == 0)) {
                neighbours[1][0] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[1][4 + 8*k] += maskVariables[k];
                    neighbours[1][8*(k+1)] += 1 - maskVariables[k];
                }
            } else if (Math.floor(gridValueDiv4 == 1)) {
                neighbours[1][1] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[1][4 + 8*k + 1] += maskVariables[k];
                    neighbours[1][8*(k+1) + 1] += 1 - maskVariables[k];
                }
            } else if (Math.floor(gridValueDiv4 == 2)) {
                neighbours[1][2] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[1][4 + 8*k + 2] += maskVariables[k];
                    neighbours[1][8*(k+1) + 2] += 1 - maskVariables[k];
                }
            } else if (Math.floor(gridValueDiv4 == 3)) {
                neighbours[1][3] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours[1][4 + 8*k + 3] += maskVariables[k];
                    neighbours[1][8*(k+1) + 3] += 1 - maskVariables[k];
                }
            }
        }
    }
    return neighbours;
    ;
}

