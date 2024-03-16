export function updateCellValueTest(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
    if (cellValue == 1) {
        newCellValue = 2;
    } else if (cellValue == 2) {
        newCellValue = 0;
    } else if ((cellValue == 0 || cellValue == 3) && neighbors == 2) {
        newCellValue = 1;
    } else if (cellValue == 0 && neighbors > 4) {
        newCellValue = 3;
    } else if (cellValue == 0 && dneighbors == 3) {
         newCellValue = 3;
    }
    return newCellValue;
}

export function updateCellValueBBTrace5(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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

export function updateCellValueBBTrace4(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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


export function updateCellValueBBTrace3(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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


export function updateCellValueBBTrace2(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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


export function updateCellValueBBTrace(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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


export function updateCellValueBB(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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

export function updateCellValueBBMod(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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

export function updateCellValueConway(cellValue, newCellValue, neighbors, sneighbors, dneighbors) {
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