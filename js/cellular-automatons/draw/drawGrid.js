
export function drawGrid(globalData) {
    let canvas = globalData.canvas; //document.getElementById('gameCanvas');
    let ctx = globalData.ctx; //canvas.getContext('2d');
    let imageData = globalData.imageData;

    // Only draw rectangles for the cells that are not zero
    for (var i = 0; i < globalData.gridHeight; i++) {
        for (var j = 0; j < globalData.gridWidth; j++) {
            if (globalData.redraw.get(i, j) == 0) {
                continue;
            }
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
            } else if (value >= 3) {
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
    ctx.putImageData(imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}
