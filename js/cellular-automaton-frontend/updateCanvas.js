export function updateCanvas(globalData) {
    let imageData = new ImageData(globalData.imageData, globalData.imageWidth, globalData.imageHeight);
    globalData.ctx.putImageData(imageData, globalData.canvasCornerX, globalData.canvasCornerY);
}
