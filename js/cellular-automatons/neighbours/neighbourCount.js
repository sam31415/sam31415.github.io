import { createWeightedSampler } from "../randomness/weightedSampler.js";

export const neighbourTypeNumbers = [11, 44];

export function computeNeighbourList(globalData, i, j, grid, neighbours, maskVariables, time, nStatesPrimary, nStatesSecondary) {
    const gridHeightMinusOne = grid.height - 1;
    const gridWidthMinusOne = grid.width - 1;
    const gridData = grid.data;
    const gridWidth = grid.width;
    var neighbours0 = neighbours[0];
    var neighbours1 = neighbours[1];
    let nStatesIndex = undefined;

    for (var di = -1; di <= 1; di++) {
        for (var dj = -1; dj <= 1; dj++) {

            if (di == 0 && dj == 0) continue;
            maskVariables[0] = ((di === -1 ? 1 : di) + (dj === -1 ? 1 : dj)) % 2;
            maskVariables[(time & 3) + 2] = (di == -1) ? 1 : 0;
            maskVariables[((1 + time) % 4) + 1] = (dj == -1) ? 1 : 0;
            maskVariables[((2 + time) % 4) + 1] = (di == 1) ? 1 : 0;
            maskVariables[((3 + time) % 4) + 1] = (dj == 1) ? 1 : 0;

            if (i == 0 || j == 0 || i == gridHeightMinusOne || j == gridWidthMinusOne) {
                var [ni, nj] = globalData.findNeighbour(globalData, i, j, di, dj);
            } else {
               var ni = i + di
               var nj = j + dj
            }
            
            const gridValue = gridData[ni * gridWidth + nj]
            const gridValuePrimary = gridValue % nStatesPrimary;
            const gridValueSecondary = Math.floor(gridValue / nStatesPrimary) % nStatesSecondary;

            nStatesIndex = nStatesPrimary;
            for (var state = 0; state < nStatesPrimary - 1; state++) {
                // We don't use the 0 state.
                if (gridValuePrimary == state + 1) {
                    neighbours0[state] += 1;
                    neighbours0[nStatesIndex + state] += maskVariables[0];      
                    nStatesIndex += nStatesPrimary;
                    neighbours0[nStatesIndex + state] += 1 - maskVariables[0];
                    neighbours0[nStatesPrimary + nStatesIndex + state] += maskVariables[1];   
                    nStatesIndex += nStatesPrimary;           
                    neighbours0[nStatesIndex + state] += 1 - maskVariables[1];
                    neighbours0[nStatesPrimary + nStatesIndex + state] += maskVariables[2]; 
                    nStatesIndex += nStatesPrimary;
                    neighbours0[nStatesIndex + state] += 1 - maskVariables[2];
                    neighbours0[nStatesPrimary + nStatesIndex + state] += maskVariables[3]; 
                    nStatesIndex += nStatesPrimary;                   
                    neighbours0[nStatesIndex + state] += 1 - maskVariables[3];
                    neighbours0[nStatesPrimary + nStatesIndex + state] += maskVariables[4];
                    nStatesIndex += nStatesPrimary;                   
                    neighbours0[nStatesIndex + state] += 1 - maskVariables[4];
                }
                nStatesIndex = nStatesPrimary;
            }

            nStatesIndex = nStatesSecondary;
            for (var state = 0; state < nStatesSecondary; state++) {
                neighbours1[state] += 1;
                if (gridValueSecondary == state) {
                    neighbours1[nStatesSecondary + state] += maskVariables[0];      
                    nStatesIndex += nStatesSecondary;
                    neighbours1[nStatesIndex + state] += 1 - maskVariables[0];
                    neighbours1[nStatesSecondary + nStatesIndex + state] += maskVariables[1];   
                    nStatesIndex += nStatesSecondary;           
                    neighbours1[nStatesIndex + state] += 1 - maskVariables[1];
                    neighbours1[nStatesSecondary + nStatesIndex + state] += maskVariables[2]; 
                    nStatesIndex += nStatesSecondary;
                    neighbours1[nStatesIndex + state] += 1 - maskVariables[2];
                    neighbours1[nStatesSecondary + nStatesIndex + state] += maskVariables[3]; 
                    nStatesIndex += nStatesSecondary;                   
                    neighbours1[nStatesIndex + state] += 1 - maskVariables[3];
                    neighbours1[nStatesSecondary + nStatesIndex + state] += maskVariables[4];
                    nStatesIndex += nStatesSecondary;                   
                    neighbours1[nStatesIndex + state] += 1 - maskVariables[4];
                }
                nStatesIndex = nStatesSecondary;
            }

        }
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

export function sampleExtraNeighbourhoodGeometry(neighbourhoodType1) {
    var root4 = Math.floor(neighbourhoodType1 / 4) * 4;
    var neighbourhoodType2 = neighbourhoodType1;
    while (neighbourhoodType2 == neighbourhoodType1) {
        neighbourhoodType2 = root4 + Math.floor(Math.random() * 4);
    }

    return neighbourhoodType2;
}

