export function enrichGlobalDataWithFromEndData(globalData) {
    globalData.canvasCornerX = 0;
    globalData.canvasCornerY = 0;
    globalData.canvas = document.getElementById('gameCanvas')
    globalData.canvas.width = globalData.gridWidth;
    globalData.canvas.height = globalData.gridHeight;
    globalData.ctx = globalData.canvas.getContext('2d', { willReadFrequently: true });
}