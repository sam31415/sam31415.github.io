export function updateCanvas(globalData) {
    let imageData = new ImageData(globalData.imageData, globalData.gridWidth, globalData.gridHeight);
    globalData.ctx.putImageData(imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}
