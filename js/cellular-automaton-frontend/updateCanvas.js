export function updateCanvas(globalData) {
    globalData.ctx.putImageData(globalData.imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}
