import { createWeightedSampler } from "../randomness/weightedSampler.js";

export const neighbourTypeNumbers = [44, 44];

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
    neighbours[0][1] = neighbours[0][0] + neighbours[0][3];
    for (var k = 0; k < maskVariables.length + 1; k++) {
        neighbours[0][4*k + 1] += neighbours[0][4*k] + neighbours[0][4*k + 3];
    }
    return neighbours;
    ;
}

export const neighbourhoodGeometryTypes = {
    "mix": 0.3, 
    "isotropic": 0.3, 
    "xcross": 0.05,
    "vcross": 0.05,
    "xvcross": 0.05,
    "directional1": 0.05,
    "directional2": 0.05,
    "directional3": 0.05,
    "directional2b": 0.05,
    "directional": 0.05
}

export function sampleNeighbourhoodGeometryType() {
    var neighbourhoodGeometryTypeSampler = createWeightedSampler(neighbourhoodGeometryTypes);
    return neighbourhoodGeometryTypeSampler();
}


export function sampleNeighbourhoodGeometry(neighbourhoodType0, geometryType) {
    var type = geometryType;
    if (type == 'mix') {
        var typeChoice = Math.random();
        if (typeChoice < 0.5) {
            type = 'isotropic';
        } else if (typeChoice < 0.7) {
            type = 'xcross';
        } else if (typeChoice < 0.9) {
            type = 'vcross';
        } else {
            type = 'directional';;
        }
        return Math.floor(Math.random() * neighbourTypeNumbers[neighbourhoodType0]);
    } 
    if (type == 'isotropic') {
        return Math.floor(Math.random() * 4);
    } else if (type == 'vcross') {
        return Math.floor(Math.random() * 4 + 4);
    } else if (type == 'xcross') {
        return Math.floor(Math.random() * 4 + 8);
    } else if (type == 'xvcross') {
        return Math.floor(Math.random() * 8 + 4);
    } else if (type == 'directional1') {
        return Math.floor(Math.random() * 4 + 12);
    } else if (type == 'directional2') {
        return Math.floor(Math.random() * 8 + 12);
    } else if (type == 'directional3') {
        return Math.floor(Math.random() * 12 + 12);
    } else if (type == 'directional2b') {
        var rnd = Math.floor(Math.random() * 8 + 12);
        if (rnd >= 16) {
            rnd += 4;
        }
        return rnd
    } else if (type == 'directional') {
        return Math.floor(Math.random() * 16 + 12);
    } 
}

