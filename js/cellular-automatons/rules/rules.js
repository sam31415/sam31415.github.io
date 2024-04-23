// Primary rule creating the starships

export function BBRule(cellValue, newCellValue, neighbors) {
    if (cellValue == 1 || cellValue == 3) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if (cellValue == 0 && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 3;
    } else {
        newCellValue = 0;
    }
    return newCellValue;
}

export function BBRuleNoZero(cellValue, newCellValue, neighbors) {
    if (cellValue == 1 || cellValue == 3) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if (cellValue == 0 && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 3;
    }
    return newCellValue;
}

export function BBRuleNoZeroTest(cellValue, newCellValue, neighbors) {
    if (cellValue == 1 || cellValue == 3) {
        newCellValue = 10;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if (cellValue == 0 && neighbors == 2) {
        newCellValue = 5;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 15;
    }
    return newCellValue;
}

export function DayAndNight(cellValue, newCellValue, sneighbors) {
    // Day and night
    if (cellValue == 1 || cellValue == 3) {
        if ([3,4,6,7,8].includes(sneighbors)) {
            newCellValue = 1;
        } else {
            newCellValue = 2;
        }
    } else if (cellValue == 0 || cellValue == 2) {
        if ([3,6,7,8].includes(sneighbors)){
            newCellValue = 3;
        } 
        // else {
        //     newCellValue = 0;
        // }
    }
    return newCellValue;
}

export function PhaseBoundaries(cellValue, newCellValue, sneighbors) {
    // Phase boundaries (original B2/S124, experimenting)
    // See also https://english.rejbrand.se/rejbrand/article.asp?ItemIndex=423
    if (cellValue == 1 || cellValue == 3) {
        if ([1,2,3,4,5].includes(sneighbors)) {
            newCellValue = 1;
        } else {
            newCellValue = 2;
        }
    } else if (cellValue == 0 || cellValue == 2) {
        if ([3,7].includes(sneighbors)){
            newCellValue = 3;
        } 
        // else {
        //     newCellValue = 0;
        // }
    }
    return newCellValue;
}



// Secondary rules to color the grid
export function updateCellValueTest(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 4);
    if (neighbors > 1) {
        newCellValue = (newCellValue + 4) % 8;
    } 
    return newCellValue;
}

// Secondary rules to color the grid
export function updateCellValueSecondary3(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 4);
    if (neighbors > 3) {
        newCellValue = (newCellValue + 4) % 16;
    } else if (neighbors == 3) {
        newCellValue = (newCellValue + 12) % 16;
    } else if (neighbors == 2) {
        newCellValue = (newCellValue + 8) % 16;
    }
    return newCellValue;
}


// Secondary rules to color the grid
export function updateCellValueSecondary2(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 4);
    if (secondaryCellValue == 0 && sneighbors > 3) {
        newCellValue = (newCellValue + 4) % 16;
    } else if (secondaryCellValue == 0 && neighbors == 3) {
        newCellValue = (newCellValue + 12) % 16;
    } else if (secondaryCellValue == 0 && neighbors == 2) {
        newCellValue = (newCellValue + 8) % 16;
    }
    return newCellValue;
}

// Secondary rules to color the grid
export function updateCellValueSecondary1(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRuleNoZero(cellValue % 4, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 4);
    if (secondaryCellValue == 0 && sneighbors < 1) {
        newCellValue = (newCellValue + 4) % 16;
    } else if (secondaryCellValue == 0 && neighbors == 3) {
        newCellValue = (newCellValue + 12) % 16;
    } else if (secondaryCellValue == 0 && neighbors == 2) {
        newCellValue = (newCellValue + 8) % 16;
    }
    return newCellValue;
}


// Heuristical rules...

export function updateCellValueBBTrace10(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && neighbors == 1) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace9(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && neighbors == 2) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace8(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && neighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace7(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && dneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace6(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && sneighbors < 3) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && dneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace5(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var dneighbors = neighbor_list[2];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && dneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace4(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && dneighbors == 1) {
         newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBBTrace3(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && sneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBBTrace2(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue % 4 == 0 && sneighbors == 1) {
         newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBBTrace(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors > 2) {
        newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBB(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    if (cellValue % 4 == 1) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2 || cellValue % 4 == 3) {
        newCellValue = 0;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 3) && neighbors > 2) {
        newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBMod(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    if (cellValue % 4 == 1 || cellValue % 4 == 3) {
        newCellValue = 2;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    } else if (cellValue % 4 == 0 && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue % 4 == 0 && neighbors > 2) {
        newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueConway(cellValue, newCellValue, neighbor_list) {
    var sneighbors = neighbor_list[1];
    if ((cellValue % 4 == 1 || cellValue % 4 == 3) && sneighbors < 2) {
        newCellValue = 2;
    } else if ((cellValue % 4 == 1 || cellValue % 4 == 3) && (sneighbors == 2 || sneighbors == 3)) {
        newCellValue = 1;
    } else if ((cellValue % 4 == 1 || cellValue % 4 == 3) && sneighbors > 5) {
        newCellValue = 2;
    } else if ((cellValue % 4 == 0 || cellValue % 4 == 2) && sneighbors == 3) {
        newCellValue = 3;
    } else if (cellValue % 4 == 2) {
        newCellValue = 0;
    }



    // // Really interesting when on a square of size a power of 2. 
    // // Goes black, but then one of the random seed produces nice expanding patterns. 
    // // Too much blinking, though. Maybe we can correct this with more states.
    // var sneighbors = neighbor_list[1];
    // if (cellValue == 1 || cellValue == 3) {
    //     if ([1,3,5,7].includes(sneighbors)) {
    //         newCellValue = 1;
    //     } else {
    //         newCellValue = 2;
    //     }
    // } else if (cellValue == 0 || cellValue == 2) {
    //     if ([1,3,5,7].includes(sneighbors)){
    //         newCellValue = 3;
    //     } else {
    //         newCellValue = 0;
    //     }
    // }

    // // Like Conway, but doesn't seem to settle
    // var sneighbors = neighbor_list[1];
    // if (cellValue == 1 || cellValue == 3) {
    //     if ([2,3,7].includes(sneighbors)) {
    //         newCellValue = 1;
    //     } else {
    //         newCellValue = 2;
    //     }
    // } else if (cellValue == 0 || cellValue == 2) {
    //     if ([3,6].includes(sneighbors)){
    //         newCellValue = 3;
    //     } else {
    //         newCellValue = 0;
    //     }
    // }



    // // Conway
    // var sneighbors = neighbor_list[1];
    // if (cellValue == 1 || cellValue == 3) {
    //     if ([2,3].includes(sneighbors)) {
    //         newCellValue = 1;
    //     } else {
    //         newCellValue = 2;
    //     }
    // } else if (cellValue == 0 || cellValue == 2) {
    //     if ([3].includes(sneighbors)){
    //         newCellValue = 3;
    //     } else {
    //         newCellValue = 0;
    //     }
    // }

    // Fluttering (needs randomness to survive...)
    // var sneighbors = neighbor_list[1];
    // if (cellValue == 1 || cellValue == 3) {
    //     if ([4,5,6].includes(sneighbors)) {
    //         newCellValue = 1;
    //     } else {
    //         newCellValue = 2;
    //     }
    // } else if (cellValue == 0 || cellValue == 2) {
    //     if ([3,4].includes(sneighbors)){
    //         newCellValue = 3;
    //     } else {
    //         newCellValue = 0;
    //     }
    // }

    // Pseudo-life https://conwaylife.com/wiki/OCA:Pseudo_Life
    // var sneighbors = neighbor_list[1];
    // if (cellValue == 1 || cellValue == 3) {
    //     if ([2,3,8].includes(sneighbors)) {
    //         newCellValue = 1;
    //     } else {
    //         newCellValue = 2;
    //     }
    // } else if (cellValue == 0 || cellValue == 2) {
    //     if ([3,5,7].includes(sneighbors)){
    //         newCellValue = 3;
    //     } else {
    //         newCellValue = 0;
    //     }
    // }

    return newCellValue;
}

export function updateCellValueStationary1(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    // if (cellValue == 3) {
    //     newCellValue = 1;
    // } else 
    // Dead to inactive
    if (cellValue == 2) {
        newCellValue = 0;
    } 
    // Death by loneliness
    //else if ((cellValue == 1 || cellValue == 3) && neighbors < 1) {
    //    newCellValue = 2;
    //} 
    // Survival
    else if ((cellValue == 1 || cellValue == 3) && (neighbors == 1)) {
        newCellValue = 1;
    }
    // Death by overcrowdedness
    else if ((cellValue == 1 || cellValue == 3) && neighbors > 3) {
        newCellValue = 2;
    } 
    // Birth
    else if ((cellValue == 0 || cellValue == 2) && neighbors == 4) {
        newCellValue = 1;
    }
    return newCellValue;
}

export function updateCellValueStationary2(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    // if (cellValue == 3) {
    //     newCellValue = 1;
    // } else 
    // Dead to inactive
    if (cellValue == 2) {
        newCellValue = 0;
    } 
    // Death by loneliness
    //else if ((cellValue == 1 || cellValue == 3) && neighbors < 1) {
    //    newCellValue = 2;
    //} 
    // Survival
    else if ((cellValue == 1 || cellValue == 3) && (neighbors == 2)) {
        newCellValue = 1;
    }
    // Death by overcrowdedness
    else if ((cellValue == 1 || cellValue == 3) && neighbors > 4) {
        newCellValue = 2;
    } 
    // Birth
    else if ((cellValue == 0 || cellValue == 2) && neighbors == 4) {
        newCellValue = 1;
    }
    return newCellValue;
}