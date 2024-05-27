import { GlobalData } from '../../../js/cellular-automatons/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automatons/gameLoop.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation/initialiseGrid.js";
import { addLikeButtonListeners, addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener, addChangeColorListener } from '../../../js/cellular-automatons/interactivity/eventHandlers.js';
import { retrieveGlobalData, setDocumentFields, adjustCanvasSize } from '../../../js/cellular-automatons/interactivity/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automatons/draw/coloring.js';

console.log("Loading main.js")

var config = {
    canvas: document.getElementById('gameCanvas'),
    ctx: document.getElementById('gameCanvas').getContext('2d'),
    gridHeight: 192,
    gridWidth: 192,
    timeout: 30,
    addRandomness: true,
    randomnessAmount: -1.5,
    randomisePeriodicityShiftAndTopology: true,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'variable',
    metaRule: "Variable",
    initialisation: "random",
    ruleSwitchPeriod: 20000,
    ruleEvolvePeriod: 2000
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
    addChangeColorListener(globalData);
    addLikeButtonListeners(globalData);

    retrieveGlobalData(globalData);
    setDocumentFields(globalData);
    adjustCanvasSize(globalData);
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








