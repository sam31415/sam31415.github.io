import { GlobalData } from '../../../js/cellular-automatons/globalData.js';
import { gameLoop } from '../../../js/cellular-automatons/gameFunctions.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation.js";
import { addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener } from '../../../js/cellular-automatons/eventHandlers.js';
import { retrieveGlobalData } from '../../../js/cellular-automatons/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automatons/coloring.js';

console.log("Loading main.js")

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var globalData = new GlobalData(canvas, ctx);

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
    setCellUpdateRule(globalData, false, true);
    setCellUpdateRule(globalData, true, true);

    initializeGrid(globalData).then(() =>{
        gameLoop(globalData);
    })
    .catch((error) => {
        console.error("Error initialising the grid: ", error)
    });
}








