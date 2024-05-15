import { GlobalData } from '../../../js/cellular-automatons/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automatons/gameLoop.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation/initialiseGrid.js";
import { addLikeButtonListeners, addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener, addChangeColorListener } from '../../../js/cellular-automatons/interactivity/eventHandlers.js';
import { retrieveGlobalData } from '../../../js/cellular-automatons/interactivity/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automatons/draw/coloring.js';

console.log("Loading main.js")

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var gridHeight = 192 //358
var gridWidth = 192 //358
var timeout = 30 // 0
var addRandomness = true
var randomnessAmount = -1.0 //-1.5
var randomisePeriodicityShiftAndTopology = true
var gridPeriodicityShiftX = 0
var gridPeriodicityShiftY = 0
var gridFlipX = false
var gridFlipY = false
var colorPalette = 'variable'
var rule = "Variable" // "Variable" // "Conway" //
var initialisation = "random"
var maxNColors = 8

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
    maxNColors=maxNColors,
);

window.onload = function() {
    addFullscreenButtonListener(globalData);
    addMouseMoveListener(globalData);
    addMouseDownListener(globalData);
    addSubmitListener(globalData);
    addTimeoutListener(globalData);
    addColorPaletteListener(globalData);
    addRuleListener(globalData);
    addChangeColoringRuleListener(globalData);
    addChangeColorListener(globalData);

    retrieveGlobalData(globalData);
    determineColorPalette(globalData);
    setFindNeighbour(globalData);
    setCellUpdateRule(globalData);

    let encodedHostname = 'c2FtMzE0MTUuZ2l0aHViLmlv'; 
    let decodedHostname = atob(encodedHostname);
    
    if (window.location.hostname === decodedHostname || window.location.hostname === '') {
        initializeGrid(globalData).then(() =>{
            gameLoop(globalData);
        })
        .catch((error) => {
            console.error("Error initialising the grid: ", error)
        });
    }

}








