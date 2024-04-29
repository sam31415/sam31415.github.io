import { saveEventData } from '../interactivity/saveEventData.js';

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
            var value = Math.floor((globalData.grid.get(i, j)) / globalData.ruleClass.colorUnit) % 4;
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
    globalData.nCellChangedHistoric = 1/100 * nCellChanged + 99 / 100 * globalData.nCellChangedHistoric;
    if (globalData.nCellChangedHistoric > 0.5 * globalData.gridHeight * globalData.gridWidth) {
        globalData.changeColoringRuleFlag = true;
        var proportion = globalData.nCellChangedHistoric / (globalData.gridHeight * globalData.gridWidth);
        console.log('Changing rule because suspected oscillation (running proportion of cells changed: ' + proportion.toFixed(1) + ').');
        globalData.nCellChangedHistoric = 15;
        saveEventData(globalData, 'oscillation');
    }
    if (globalData.nCellChangedHistoric < 3) {
        globalData.changeColoringRuleFlag = true;
        console.log('Changing rule because not enough cells changed (' + globalData.nCellChangedHistoric + ').')
        globalData.nCellChangedHistoric = 20;
        saveEventData(globalData, 'blackout');
    }
    ctx.putImageData(imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}
