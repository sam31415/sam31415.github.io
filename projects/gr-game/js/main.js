import { GlobalData } from '../../../js/cellular-automatons/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automatons/gameLoop.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation/initialiseGrid.js";
import { addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener } from '../../../js/cellular-automatons/interactivity/eventHandlers.js';
import { retrieveGlobalData } from '../../../js/cellular-automatons/interactivity/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automatons/draw/coloring.js';

console.log("Loading main.js")

var config = {
    canvas: document.getElementById('gameCanvas'),
    ctx: document.getElementById('gameCanvas').getContext('2d'),
    gridHeight: 128,
    gridWidth: 128,
    timeout: 20,
    addRandomness: true,
    randomnessAmount: -1.0,
    randomisePeriodicityShiftAndTopology: true,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'black2',
    rule: "VariableGR",
    initialisation: "random",
    logo: "grLogoLarge.png",
    useLogo: true,
};

var globalData = new GlobalData(config);


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
    addChangeColoringRuleListener(globalData);

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








