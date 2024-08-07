import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { initialiseGrid } from "../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/initialiseGrid.js";
import { addChangeColoringRuleListener, addRuleListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addCycleTimeListener, addColorPaletteListener, addChangeColorListener } from '../../../js/cellular-automaton-frontend/eventHandlers.js';
import { retrieveGlobalData, setDocumentFields, adjustCanvasSize } from '../../../js/cellular-automaton-frontend/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/draw/coloring.js';
import { updateCanvas } from '../../../js/cellular-automaton-frontend/updateCanvas.js';
import { enrichGlobalDataWithFromEndData } from '../../../js/cellular-automaton-frontend/enrichGlobalDataWithFrontEndData.js';

console.log("Loading main.js")

var config = {
    canvas: document.getElementById('gameCanvas'),
    ctx: document.getElementById('gameCanvas').getContext('2d'),
    gridHeight: 192,
    gridWidth: 192,
    targetCycleTime: 30,
    addRandomness: true,
    randomnessAmount: -1.0,
    randomisePeriodicityShiftAndTopology: true,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'variable',
    metaRule: "VariableDemo",
    initialisation: "random",
    ruleSwitchPeriod: 20000,
    ruleEvolvePeriod: 2000,
    logo: "logo2.png",
    useLogo: false,
};

var globalData = new GlobalData(config);
enrichGlobalDataWithFromEndData(globalData);

window.onload = function() {
    addFullscreenButtonListener(globalData);
    addMouseMoveListener(globalData);
    addMouseDownListener(globalData);
    addSubmitListener(globalData);
    addCycleTimeListener(globalData);
    addColorPaletteListener(globalData);
    addRuleListener(globalData);
    addChangeColoringRuleListener(globalData);
    addChangeColorListener(globalData);

    retrieveGlobalData(globalData);
    setDocumentFields(globalData);
    adjustCanvasSize(globalData);
    determineColorPalette(globalData);
    setFindNeighbour(globalData);
    setCellUpdateRule(globalData);

    let encodedHostname = 'c2FtMzE0MTUuZ2l0aHViLmlv'; 
    let decodedHostname = atob(encodedHostname);
    
    if (window.location.hostname === decodedHostname || window.location.hostname === '') {
        initialiseGrid(globalData).then(() =>{
            gameLoop(globalData, updateCanvas);
        })
        .catch((error) => {
            console.error("Error initialising the grid: ", error)
        });
    }

}








