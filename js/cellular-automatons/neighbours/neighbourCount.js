import { createWeightedSampler } from "../randomness/weightedSampler.js";

export const neighbourTypeNumbers = [44, 44];

export function computeNeighbourList(globalData, i, j, grid, neighbours, maskVariables, time) {
    const gridHeightMinusOne = grid.height - 1;
    const gridWidthMinusOne = grid.width - 1;
    const gridData = grid.data;
    const gridWidth = grid.width;
    var neighbours0 = neighbours[0];
    var neighbours1 = neighbours[1];
    for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {

            if (di == 0 && dj == 0) continue;

            maskVariables[0] = ((di === -1 ? 1 : di) + (dj === -1 ? 1 : dj)) % 2;
            maskVariables[(time & 3) + 1] = (di == -1) ? 1 : 0;
            maskVariables[((1 + time) & 3) + 1] = (dj == -1) ? 1 : 0;
            maskVariables[((2 + time) & 3) + 1] = (di == 1) ? 1 : 0;
            maskVariables[((3 + time) & 3) + 1] = (dj == 1) ? 1 : 0;

            if (i == 0 || j == 0 || i == gridHeightMinusOne || j == gridWidthMinusOne) {
                var [ni, nj] = globalData.findNeighbour(globalData, i, j, di, dj);
            } else {
               var ni = i + di
               var nj = j + dj
            }
            
            const gridValue = gridData[ni * gridWidth + nj]
            const gridValueMod4 = gridValue & 3;
            const gridValueDiv4 = (gridValue & 15) >> 2;

            if (gridValueMod4 == 1) {
                neighbours0[0] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours0[4 + 8*k] += maskVariables[k];
                    neighbours0[8*(k+1)] += 1 - maskVariables[k];
                }
            } else if (gridValueMod4 == 2) {
                neighbours0[2] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours0[4 + 8*k + 2] += maskVariables[k];
                    neighbours0[8*(k+1) + 2] += 1 - maskVariables[k];
                }
            } else if (gridValueMod4 == 3) {
                neighbours0[3] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours0[4 + 8*k + 3] += maskVariables[k];
                    neighbours0[8*(k+1) + 3] += 1 - maskVariables[k];
                }
            }
            if (gridValueDiv4 == 0) {
                neighbours1[0] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours1[4 + 8*k] += maskVariables[k];
                    neighbours1[8*(k+1)] += 1 - maskVariables[k];
                }
            } else if (gridValueDiv4 == 1) {
                neighbours1[1] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours1[4 + 8*k + 1] += maskVariables[k];
                    neighbours1[8*(k+1) + 1] += 1 - maskVariables[k];
                }
            } else if (gridValueDiv4 == 2) {
                neighbours1[2] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours1[4 + 8*k + 2] += maskVariables[k];
                    neighbours1[8*(k+1) + 2] += 1 - maskVariables[k];
                }
            } else if (gridValueDiv4 == 3) {
                neighbours1[3] += 1;
                for (var k = 0; k < maskVariables.length; k++) {
                    neighbours1[4 + 8*k + 3] += maskVariables[k];
                    neighbours1[8*(k+1) + 3] += 1 - maskVariables[k];
                }
            }
        }
    }
    for (var k = 0; k < maskVariables.length + 1; k++) {
        neighbours0[4*k + 1] += neighbours0[4*k] + neighbours0[4*k + 3];
    }
    return [neighbours0, neighbours1];
    ;
}

// Geometry types
export const MIX = "mix";
export const ISOTROPIC = "isotropic";
export const XCROSS = "xcross";
export const VCROSS = "vcross";
export const XVCROSS = "xvcross";
export const DIRECTIONAL1 = "directional1";
export const DIRECTIONAL2 = "directional2";
export const DIRECTIONAL3 = "directional3";
export const DIRECTIONAL2B = "directional2b";
export const DIRECTIONAL = "directional";

export const neighbourhoodGeometryTypes = {
    [MIX]: 0.2, 
    [ISOTROPIC]: 0.4, 
    [XCROSS]: 0.05,
    [VCROSS]: 0.05,
    [XVCROSS]: 0.05,
    [DIRECTIONAL1]: 0.05,
    [DIRECTIONAL2]: 0.05,
    [DIRECTIONAL3]: 0.05,
    [DIRECTIONAL2B]: 0.05,
    [DIRECTIONAL]: 0.05
}

export function sampleNeighbourhoodGeometryType() {
    var neighbourhoodGeometryTypeSampler = createWeightedSampler(neighbourhoodGeometryTypes);
    return neighbourhoodGeometryTypeSampler();
}


export function sampleNeighbourhoodGeometry(neighbourhoodType0, geometryType) {
    var type = geometryType;
    if (type == MIX) {
        var typeChoice = Math.random();
        if (typeChoice < 0.5) {
            type = ISOTROPIC;
        } else if (typeChoice < 0.7) {
            type = XCROSS;
        } else if (typeChoice < 0.9) {
            type = VCROSS;
        } else {
            type = DIRECTIONAL;
        }
    }
    if (type == ISOTROPIC) {
        return Math.floor(Math.random() * 4);
    } else if (type == VCROSS) {
        return Math.floor(Math.random() * 4 + 4);
    } else if (type == XCROSS) {
        return Math.floor(Math.random() * 4 + 8);
    } else if (type == XVCROSS) {
        return Math.floor(Math.random() * 8 + 4);
    } else if (type == DIRECTIONAL1) {
        return Math.floor(Math.random() * 4 + 12);
    } else if (type == DIRECTIONAL2) {
        return Math.floor(Math.random() * 8 + 12);
    } else if (type == DIRECTIONAL3) {
        return Math.floor(Math.random() * 12 + 12);
    } else if (type == DIRECTIONAL2B) {
        var rnd = Math.floor(Math.random() * 8 + 12);
        if (rnd >= 16) {
            rnd += 4;
        }
        return rnd
    } else if (type == DIRECTIONAL) {
        return Math.floor(Math.random() * 16 + 12);
    } 
}

