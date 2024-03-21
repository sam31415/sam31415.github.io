
// Primary rule creating the starships

function BBRule(cellValue, newCellValue, neighbors) {
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

// Secondary rules to color the grid
export function updateCellValueTest(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRule(cellValue % 10, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 10);
    if (secondaryCellValue == 0 && sneighbors < 1) {
        newCellValue = (newCellValue + 10) % 40;
    } else if (secondaryCellValue == 0 && dneighbors == 3) {
        newCellValue = (newCellValue + 30) % 40;
    } else if (secondaryCellValue == 0 && dneighbors == 2) {
        newCellValue = (newCellValue + 20) % 40;
    }
    return newCellValue;
}


// Secondary rules to color the grid
export function updateCellValueSecondary2(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRule(cellValue % 10, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 10);
    if (secondaryCellValue == 0 && sneighbors > 3) {
        newCellValue = (newCellValue + 10) % 40;
    } else if (secondaryCellValue == 0 && neighbors == 3) {
        newCellValue = (newCellValue + 30) % 40;
    } else if (secondaryCellValue == 0 && neighbors == 2) {
        newCellValue = (newCellValue + 20) % 40;
    }
    return newCellValue;
}

// Secondary rules to color the grid
export function updateCellValueSecondary1(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    newCellValue = BBRule(cellValue % 10, newCellValue, neighbors);
    var secondaryCellValue = Math.floor(cellValue / 10);
    if (secondaryCellValue == 0 && sneighbors < 1) {
        newCellValue = (newCellValue + 10) % 40;
    } else if (secondaryCellValue == 0 && neighbors == 3) {
        newCellValue = (newCellValue + 30) % 40;
    } else if (secondaryCellValue == 0 && neighbors == 2) {
        newCellValue = (newCellValue + 20) % 40;
    }
    return newCellValue;
}


// Heuristical rules...

export function updateCellValueBBTrace10(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue == 0 && neighbors == 1) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace9(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue == 0 && neighbors == 2) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace8(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue == 0 && neighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace7(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && sneighbors < 1) {
        newCellValue = 3;
    } else if (cellValue == 0 && dneighbors == 3) {
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
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && sneighbors < 3) {
        newCellValue = 3;
    } else if (cellValue == 0 && dneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace5(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue == 0 && dneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace4(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var dneighbors = neighbor_list[2];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue == 0 && dneighbors == 1) {
         newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBBTrace3(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue == 0 && sneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBBTrace2(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    var sneighbors = neighbor_list[1];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 2) {
        newCellValue = 3;
    } else if (cellValue == 0 && sneighbors == 1) {
         newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBBTrace(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors > 2) {
        newCellValue = 3;
    }
    return newCellValue;
}


export function updateCellValueBB(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2 || cellValue == 3) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors > 2) {
        newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBMod(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
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

export function updateCellValueConway(cellValue, newCellValue, neighbor_list) {
    var neighbors = neighbor_list[0];
    if (cellValue == 3) {
        newCellValue = 1;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 1 || cellValue == 3) && neighbors < 2) {
        newCellValue = 2;
    } else if ((cellValue == 1 || cellValue == 3) && (neighbors == 2 || neighbors == 3)) {
        newCellValue = 1;
    } else if ((cellValue == 1 || cellValue == 3) && neighbors > 3) {
        newCellValue = 2;
    } else if ((cellValue == 0 || cellValue == 2) && neighbors == 3) {
        newCellValue = 3;
    } 
    return newCellValue;
}