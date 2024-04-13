export class GlobalData {
    constructor(canvas, ctx) {
        this.gridHeight = 200;
        this.gridWidth = 200;
        this.canvasCornerX = 0;
        this.canvasCornerY = 0;
        this.timeout = 20;
        this.grid = null;
        this.redraw = null;
        this.imageData = null;
        this.canvas = canvas;
        this.ctx = ctx;
        this.addRandomness = true;
        this.randomnessAmount = -6.0;
        this.gridPeriodicityShiftX = 0;
        this.gridPeriodicityShiftY = 0;
        this.gridFlipX = false;
        this.gridFlipY = false;
        this.colorPalette = 'black2';
        this.rule = "VariableGR";
        this.initialisation = "random";
        this.ruleOrder = 2;
        this.updateCellValue = null;
        this.updateCellValueAuxiliary = null;
        this.findNeighbour = null;
        this.mask = null;

        this.canvas.width = this.gridWidth;
        this.canvas.height = this.gridHeight;
        this.imageData = ctx.createImageData(canvas.width, canvas.height);
    }
}