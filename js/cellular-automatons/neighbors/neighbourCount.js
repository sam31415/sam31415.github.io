export const neighborTypeNumbers = [12, 5]

export function computeNeighborList(globalData, i, j) {
    var neighbors = 0;
    var neighborsVH = 0;
    var neighborsDiag = 0;
    var sneighbors = 0;
    var sneighborsVH = 0;
    var sneighborsDiag = 0;
    var dneighbors = 0;
    var dneighborsVH = 0;
    var dneighborsDiag = 0;
    var neighborsAux0 = 0;
    var neighborsAux1 = 0;
    var neighborsAux2 = 0;
    var neighborsAux3 = 0;
    for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {
            if (di == 0 && dj == 0) continue;
            var vertHoriz = (Math.abs(di) + Math.abs(dj)) % 2;
            let neighbourCoord = globalData.findNeighbour(globalData, i, j, di, dj);
            let ni = neighbourCoord[0];
            let nj = neighbourCoord[1];
            if (globalData.grid.get(ni, nj) % 4 == 1) {
                neighbors += 1;
                neighborsVH += vertHoriz;
                neighborsDiag += 1 - vertHoriz;
            } else if (globalData.grid.get(ni, nj) % 4 == 2) {
                dneighbors += 1;
                dneighborsVH += vertHoriz;
                dneighborsDiag += 1 - vertHoriz;
            } else if (globalData.grid.get(ni, nj) % 4 == 3) {
                sneighbors += 1;
                sneighborsVH += vertHoriz;
                sneighborsDiag += 1 - vertHoriz;
            }
            if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 0) {
                neighborsAux0 += 1;
            } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 1) {
                neighborsAux1 += 1;
            } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 2) {
                neighborsAux2 += 1;
            } else if (Math.floor((globalData.grid.get(ni, nj) % 16) / 4) == 3) {
                neighborsAux3 += 1;
            }
        }
    }
    return [[neighbors, neighbors + sneighbors, dneighbors, sneighbors,
             neighborsVH, neighborsVH + sneighborsVH, dneighborsVH, sneighborsVH,
             neighborsDiag, neighborsDiag + sneighborsDiag, dneighborsDiag, sneighborsDiag,], 
            [neighborsAux0, neighborsAux1, neighborsAux2, neighborsAux3, neighborsAux1 + neighborsAux3]];
    ;
}

