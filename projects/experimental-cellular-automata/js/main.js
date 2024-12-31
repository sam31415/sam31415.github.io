import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { initialiseGrid } from "../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/initialiseGrid.js";
import { addPlayPauseStepButtonListeners, addLikeButtonListeners, addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addCycleTimeListener, addColorPaletteListener, addChangeColorListener } from '../../../js/cellular-automaton-frontend/eventHandlers.js';
import { retrieveGlobalData, setDocumentFields, adjustCanvasSize } from '../../../js/cellular-automaton-frontend/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { updateCanvas } from '../../../js/cellular-automaton-frontend/updateCanvas.js';
import { enrichGlobalDataWithFromEndData } from '../../../js/cellular-automaton-frontend/enrichGlobalDataWithFrontEndData.js';
import { stagingConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/stagingConfig.js';
import { initialisationConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/initialisationConfig.js';
import { sanityConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/sanityConfig.js';
import { attachConfigInfoToGlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/attachConfigInfoToGlobalData.js';

console.log("Loading main.js")


var config = {
    gridHeight: 192, // 210, // 840, // 
    gridWidth: 192, // 105, // 420, // 
    targetCycleTime: 0, // 50, //
    addRandomness: true,
    randomnessAmount: -1.5, // -10, // 
    randomisePeriodicityShiftAndTopology: true, // false, // 
    gridPeriodicityShiftX: null, // 0, //
    gridPeriodicityShiftY: null, // 0, //
    gridFlipX: false,
    gridFlipY: false,
    metaRule: "Variable",
    initialisation: "random",
    ruleSwitchPeriod: 20000,
    ruleEvolvePeriod: 2000,
    config: stagingConfigs["Mixed"], // stagingConfigs["CW Logo"], // 
    initialisationConfig:initialisationConfigs["Vaccuum"], //  initialisationConfigs["CW Logo"], // initialisationConfigs["Random g4"], // 
    sanityConfig: sanityConfigs["Default"],
};

var globalData = new GlobalData(config);
enrichGlobalDataWithFromEndData(globalData);

window.onload = function() {
    addRandomnessCheckboxListener(globalData);
    addFullscreenButtonListener(globalData);
    addMouseMoveListener(globalData);
    addMouseDownListener(globalData);
    addSubmitListener(globalData);
    addRandomnessSliderListener(globalData);
    addPeriodicityListeners(globalData);
    addCycleTimeListener(globalData);
    addColorPaletteListener(globalData);
    addRuleListener(globalData);
    addChangeColoringRuleListener(globalData);
    addChangeColorListener(globalData);
    addLikeButtonListeners(globalData);
    addPlayPauseStepButtonListeners(globalData);

    retrieveGlobalData(globalData);
    setDocumentFields(globalData);
    adjustCanvasSize(globalData);
    setFindNeighbour(globalData);
    attachConfigInfoToGlobalData(globalData)
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








