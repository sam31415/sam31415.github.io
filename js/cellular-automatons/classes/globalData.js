export class GlobalData {
    constructor(
        canvas, 
        ctx, 
        gridHeight = 200, 
        gridWidth = 200, 
        timeout = 20, 
        addRandomness = true, 
        randomnessAmount = -2.0, 
        gridPeriodicityShiftX = 0, 
        gridPeriodicityShiftY = 0, 
        gridFlipX = false, 
        gridFlipY = false, 
        colorPalette = 'black2', 
        rule = "VariableGR", 
        initialisation = "random", 
        ruleOrder = 2,
        maxNColors = 6,
        ruleSwitchPeriod = 5000,
    ){
        this.gridHeight = gridHeight;
        this.gridWidth = gridWidth;
        this.canvasCornerX = 0;
        this.canvasCornerY = 0;
        this.timeout = timeout;
        this.grid = null;
        this.redraw = null;
        this.imageData = null;
        this.canvas = canvas;
        this.ctx = ctx;
        this.addRandomness = addRandomness;
        this.randomnessAmount = randomnessAmount;
        this.gridPeriodicityShiftX = gridPeriodicityShiftX;
        this.gridPeriodicityShiftY = gridPeriodicityShiftY;
        this.gridFlipX = gridFlipX;
        this.gridFlipY = gridFlipY;
        this.colorPalette = colorPalette;
        this.rule = rule;
        this.initialisation = initialisation;
        this.ruleOrder = ruleOrder;
        this.maxNColors = maxNColors;
        this.updateCellValue = null;
        this.updateCellValueAuxiliary = null;
        this.findNeighbour = null;
        this.mask = null;
        this.ruleSwitchPeriod = ruleSwitchPeriod;
        this.ruleSwitchProbability = 1 / this.ruleSwitchPeriod;

        this.canvas.width = this.gridWidth;
        this.canvas.height = this.gridHeight;
        this.imageData = ctx.createImageData(canvas.width, canvas.height);
        this.changeColoringRuleFlag = true;
        this.nCellChangedHistoric = 0;
        this.saveEventData = false;
    }
}