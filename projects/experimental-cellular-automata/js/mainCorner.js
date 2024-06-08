import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { initializeGrid } from "../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/initialiseGrid.js";
import { addFullscreenCornerButtonListener, addLikeButtonListeners, addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener, addChangeColorListener } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/eventHandlers.js';
import { retrieveGlobalData, setDocumentFields, adjustCanvasSize } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/draw/coloring.js';

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
    metaRule: "VariableMix",
    initialisation: "random",
    ruleSwitchPeriod: 20000,
    ruleEvolvePeriod: 2000
};

var globalData = new GlobalData(config);
globalData.canvas.width = 192;
globalData.canvas.height = 192;

window.onload = function() {
    addRandomnessCheckboxListener(globalData);
    addFullscreenCornerButtonListener();
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
    //adjustCanvasSize(globalData);
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








