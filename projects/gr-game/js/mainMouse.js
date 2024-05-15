import { GlobalData } from '../../../js/cellular-automatons/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automatons/gameLoop.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automatons/draw/coloring.js';
import { Grid } from '../../../js/cellular-automatons/classes/grid.js';

console.log("Loading main.js")

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var gridHeight = 29
var gridWidth = 78
var timeout = 80
var addRandomness = false
var randomnessAmount = -0.0
var randomisePeriodicityShiftAndTopology = false
var gridPeriodicityShiftX = 0
var gridPeriodicityShiftY = 0
var gridFlipX = false
var gridFlipY = false
var colorPalette = 'mouseAnimation'
var rule = "ModifiedBB"
var initialisation = "zero"
var maxNColors = 6

var globalData = new GlobalData(
    canvas=canvas, 
    ctx=ctx,
    gridHeight=gridHeight,
    gridWidth=gridWidth,
    timeout=timeout,
    addRandomness=addRandomness,
    randomnessAmount=randomnessAmount,
    randomisePeriodicityShiftAndTopology=randomisePeriodicityShiftAndTopology,
    gridPeriodicityShiftX=gridPeriodicityShiftX,
    gridPeriodicityShiftY=gridPeriodicityShiftY,
    gridFlipX=gridFlipX,
    gridFlipY=gridFlipY,
    colorPalette=colorPalette,
    rule=rule,
    initialisation=initialisation,
    maxNColors=maxNColors
);


window.onload = function() {

    globalData.grid = new Grid(globalData.gridWidth, globalData.gridHeight);
    globalData.redraw = new Grid(globalData.gridWidth, globalData.gridHeight);

    const backgroundCanvas = document.getElementById('background');
    const backgroundCtx = backgroundCanvas.getContext('2d');
    globalData.backgroundCanvas = backgroundCanvas;

    // Create a new image object
    const img = new Image();

    // Set the source of the image
    img.src = './grWebsiteBackgroundTransp.png?' + new Date().getTime();

    // Draw the image on the canvas once it's loaded
    img.onload = function() {
        // Draw the image
        backgroundCtx.drawImage(img, 0, 0, backgroundCanvas.width, backgroundCanvas.height);
    };

    addMouseMoveListenerNoShift(globalData);
    addMouseDownListener(globalData);

    //retrieveGlobalData(globalData);
    determineColorPalette(globalData);
    setFindNeighbour(globalData);
    setCellUpdateRule(globalData);
    
    gameLoop(globalData);
}

export function addMouseMoveListenerNoShift(globalData) {
    globalData.backgroundCanvas.addEventListener('mousemove', function(event) {
        var rect = globalData.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Calculate the size of each cell on the screen
        var cellScreenSizeX = rect.width / globalData.gridWidth;
        var cellScreenSizeY = rect.height / globalData.gridHeight;

        // Calculate the clicked cell
        var j = Math.floor(x / cellScreenSizeX);
        var i = Math.floor(y / cellScreenSizeY);

        globalData.grid.set(i, j, 1);
    });
}


export function addMouseDownListener(globalData) {
    globalData.backgroundCanvas.addEventListener('mousedown', function(event) {
        var rect = globalData.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Calculate the size of each cell on the screen
        var cellScreenSizeX = rect.width / globalData.gridWidth;
        var cellScreenSizeY = rect.height / globalData.gridHeight;

        // Calculate the clicked cell
        var j = Math.floor(x / cellScreenSizeX);
        var i = Math.floor(y / cellScreenSizeY);
        
        if (!event.shiftKey && !event.ctrlKey) {
            globalData.grid.set((i+1) % globalData.gridHeight, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set((i-1+globalData.gridHeight) % globalData.gridHeight, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set((i-1+globalData.gridHeight) % globalData.gridHeight, (j-1+globalData.gridWidth) % globalData.gridWidth, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, (j-1+globalData.gridWidth) % globalData.gridWidth, 1);
        } else if (event.shiftKey && !event.ctrlKey) {
            globalData.grid.set(i, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set(i, j, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, j, 1);
        } else if (!event.shiftKey && event.ctrlKey) {
            globalData.grid.set(i, j, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, j, 1);
        } else if (event.shiftKey && event.ctrlKey) {
            globalData.grid.set(i, j, 1);
            globalData.grid.set(i, (j+1) % globalData.gridWidth, 1);
        }
    });
}








