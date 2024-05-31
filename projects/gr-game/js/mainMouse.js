import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/draw/coloring.js';
import { Grid } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/grid.js';

console.log("Loading main.js")

var config = {
    canvas: document.getElementById('gameCanvas'),
    ctx: document.getElementById('gameCanvas').getContext('2d'),
    gridHeight: 29,
    gridWidth: 78,
    timeout: 80,
    addRandomness: false,
    randomisePeriodicityShiftAndTopology: false,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'mouseAnimation',
    metaRule: "Variable",
    initialisation: "zero",
};

var globalData = new GlobalData(config);


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








