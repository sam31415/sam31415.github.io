
export function drawGrid(globalData) {
    let ctx = globalData.ctx; //canvas.getContext('2d');
    let imageData = globalData.imageData;

    var nCellChanged = 0;

    // Only draw rectangles for the cells that are not zero
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            if (globalData.redraw.get(i, j) == 0) {
                continue;
            }
            nCellChanged += 1;
            if (globalData.ruleOrder == 2) {
                var value = Math.floor(globalData.grid.get(i, j) / 4) % 4;
            } else if (globalData.ruleOrder == 3) {
                var value = Math.floor((globalData.grid.get(i, j)) / 16) % 4;
            } else {
                var value = globalData.grid.get(i, j) % 4;
            }
            let color;
            if (value == 0) {
                color = globalData.backgroundColor;
            } else if (value == 1) {
                color = globalData.activatedColor;
            } else if (value == 2) {
                color = globalData.deadColor;
            } else if (value == 3) {
                color = globalData.superActivatedColor;
            } else {
                continue;
            }
            let index = (i * globalData.gridWidth + j) * 4;
            imageData.data[index + 0] = color.r; // Red
            imageData.data[index + 1] = color.g; // Green
            imageData.data[index + 2] = color.b; // Blue
            imageData.data[index + 3] = 255; // Alpha (255 = fully opaque)
        }
    }
    globalData.nCellChangedHistoric = 1/10 * nCellChanged + 9 / 10 * globalData.nCellChangedHistoric;
    if (globalData.nCellChangedHistoric > 0.2 * globalData.gridHeight * globalData.gridWidth) {
        globalData.changeColoringRuleFlag = true;
        var proportion = globalData.nCellChangedHistoric / (globalData.gridHeight * globalData.gridWidth);
        console.log('Changing rule because suspected oscillation (running proportion of cells changed: ' + proportion.toFixed(1) + ').');
        globalData.nCellChangedHistoric = 0;
    }
    if (globalData.nCellChangedHistoric < 3) {
        globalData.changeColoringRuleFlag = true;
        console.log('Changing rule because not enough cells changed (' + nCellChanged + ').')
        globalData.nCellChangedHistoric = 20;
    }
    ctx.putImageData(imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}
