import { GlobalData } from '../../../js/cellular-automatons/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automatons/gameLoop.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation/initialiseGrid.js";
import { addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener } from '../../../js/cellular-automatons/interactivity/eventHandlers.js';
import { retrieveGlobalData } from '../../../js/cellular-automatons/interactivity/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automatons/draw/coloring.js';

console.log("Loading main.js")

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var gridHeight = 358
var gridWidth = 358
var timeout = 0
var addRandomness = true
var randomnessAmount = -1.5
var gridPeriodicityShiftX = 0
var gridPeriodicityShiftY = 0
var gridFlipX = false
var gridFlipY = false
var colorPalette = 'variable'
var rule = "Variable"
var initialisation = "random"
var ruleOrder = 2

var globalData = new GlobalData(
    canvas=canvas, 
    ctx=ctx,
    gridHeight=gridHeight,
    gridWidth=gridWidth,
    timeout=timeout,
    addRandomness=addRandomness,
    randomnessAmount=randomnessAmount,
    gridPeriodicityShiftX=gridPeriodicityShiftX,
    gridPeriodicityShiftY=gridPeriodicityShiftY,
    gridFlipX=gridFlipX,
    gridFlipY=gridFlipY,
    colorPalette=colorPalette,
    rule=rule,
    initialisation=initialisation,
    ruleOrder=ruleOrder
);

window.onload = function() {
    addRandomnessCheckboxListener(globalData);
    addFullscreenButtonListener(globalData);
    addMouseMoveListener(globalData);
    addMouseDownListener(globalData);
    addSubmitListener(globalData);
    addRandomnessSliderListener(globalData);
    addPeriodicityListeners(globalData);
    addTimeoutListener(globalData);
    addColorPaletteListener(globalData);
    addRuleListener(globalData);

    retrieveGlobalData(globalData);
    determineColorPalette(globalData);
    setFindNeighbour(globalData);
    setCellUpdateRule(globalData);

    initializeGrid(globalData).then(() =>{
        gameLoop(globalData);
    })
    .catch((error) => {
        console.error("Error initialising the grid: ", error)
    });
}








