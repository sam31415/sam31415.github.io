export const neighbourTypeNumbers = [12, 5]

export function computeNeighbourList(globalData, i, j) {
    var neighbours = 0;
    var neighboursVH = 0;
    var neighboursDiag = 0;
    var sneighbours = 0;
    var sneighboursVH = 0;
    var sneighboursDiag = 0;
    var dneighbours = 0;
    var dneighboursVH = 0;
    var dneighboursDiag = 0;
    var neighboursAux0 = 0;
    var neighboursAux1 = 0;
    var neighboursAux2 = 0;
    var neighboursAux3 = 0;
    for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {
            if (di == 0 && dj == 0) continue;
            var vertHoriz = (Math.abs(di) + Math.abs(dj)) % 2;
            let neighbourCoord = globalData.findNeighbour(globalData, i, j, di, dj);
            let ni = neighbourCoord[0];
            let nj = neighbourCoord[1];
            if (globalData.grid.get(ni, nj) % 4 == 1) {
                neighbours += 1;
                neighboursVH += vertHoriz;
                neighboursDiag += 1 - vertHoriz;
            } else if (globalData.grid.get(ni, nj) % 4 == 2) {
                dneighbours += 1;
                dneighboursVH += vertHoriz;
                dneighboursDiag += 1 - vertHoriz;
            } else if (globalData.grid.get(ni, nj) % 4 == 3) {
                sneighbours += 1;
                sneighboursVH += vertHoriz;
                sneighboursDiag += 1 - vertHoriz;
            }
            if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 0) {
                neighboursAux0 += 1;
            } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 1) {
                neighboursAux1 += 1;
            } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 2) {
                neighboursAux2 += 1;
            } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 3) {
                neighboursAux3 += 1;
            }
        }
    }
    return [[neighbours, neighbours + sneighbours, dneighbours, sneighbours,
             neighboursVH, neighboursVH + sneighboursVH, dneighboursVH, sneighboursVH,
             neighboursDiag, neighboursDiag + sneighboursDiag, dneighboursDiag, sneighboursDiag,], 
            [neighboursAux0, neighboursAux1, neighboursAux2, neighboursAux3, neighboursAux1 + neighboursAux3]];
    ;
}

