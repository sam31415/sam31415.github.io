import { saveEventData } from '../interactivity/saveEventData.js';

export function drawGrid(globalData) {
    let ctx = globalData.ctx; //canvas.getContext('2d');
    let imageData = globalData.imageData;

    var nCellChanged = 0;
    var meanColorChange = 0;
    // var brightness = 0;

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
            meanColorChange += Math.sqrt((imageData.data[index + 0] - color.r) ** 2 + (imageData.data[index + 1] - color.g) ** 2 + (imageData.data[index + 2] - color.b) ** 2);
            // brightness += (color.r + color.g + color.b);
            imageData.data[index + 0] = color.r; // Red
            imageData.data[index + 1] = color.g; // Green
            imageData.data[index + 2] = color.b; // Blue
            imageData.data[index + 3] = color.t; // Transparency
        }
    }
    globalData.nCellChangedHistoric = 1/100 * nCellChanged + 99 / 100 * globalData.nCellChangedHistoric;
    globalData.meanColorChangeHistoric = 1/100 * meanColorChange / (nCellChanged + (globalData.gridHeight * globalData.gridWidth)/30) + 99 / 100 * globalData.meanColorChangeHistoric;
    // brightness = brightness / (3 * nCellChanged);
    // globalData.brightness = 1/30 * brightness + 29/30 * globalData.brightness;
    // globalData.maxBrightness = 29/30 * (globalData.maxBrightness - globalData.brightness) + globalData.brightness;
    // globalData.minBrightness = 29/30 * (globalData.minBrightness - globalData.brightness) + globalData.brightness;
    // if (globalData.maxBrightness < brightness) {
    //     globalData.maxBrightness += 3;
    // } else if (globalData.minBrightness > brightness) {
    //     globalData.minBrightness -= 3;
    // }
    // if (globalData.time % 30 == 0) {
    //     if (isNaN(globalData.brightness)) {
    //         globalData.brightness = 127;
    //         globalData.maxBrightness = 130;
    //         globalData.maxBrightness = 124;
    //     }
    //     console.log('Mean color change: ' + globalData.meanColorChangeHistoric.toFixed(1) + '.');
    //     console.log('Brightness: ' + globalData.brightness.toFixed(1) + '.');
    //     let diff = globalData.maxBrightness.toFixed(1) - globalData.minBrightness.toFixed(1);
    //     console.log('Max - min brightness: ' + diff + '.');
    // }
    //if (globalData.nCellChangedHistoric > 0.5 * globalData.gridHeight * globalData.gridWidth) {
    if (globalData.meanColorChangeHistoric > 330) {
        globalData.changeColoringRuleFlag = true;
        var proportion = globalData.nCellChangedHistoric / (globalData.gridHeight * globalData.gridWidth);
        // console.log('Changing rule because suspected oscillation (running proportion of cells changed: ' + proportion.toFixed(1) + ').');
        console.log('Changing rule because suspected oscillation (std of color change: ' + globalData.meanColorChangeHistoric.toFixed(1) + ').');
        globalData.nCellChangedHistoric = 15;
        globalData.meanColorChangeHistoric = 10;
        // globalData.maxBrightness = 127;
        // globalData.minBrightness = 127;
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