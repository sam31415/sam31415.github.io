export function enrichGlobalDataWithFromEndData(globalData) {
    globalData.canvasCornerX = 0;
    globalData.canvasCornerY = 0;
    globalData.canvas = document.getElementById('gameCanvas')
    globalData.canvas.width = globalData.imageWidth;
    globalData.canvas.height = globalData.imageHeight;
    globalData.ctx = globalData.canvas.getContext('2d', { willReadFrequently: true });
}