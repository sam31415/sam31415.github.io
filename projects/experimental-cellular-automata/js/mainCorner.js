import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { initialiseGrid } from "../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/initialiseGrid.js";
import { addFullscreenCornerButtonListener, addLikeButtonListeners, addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addCycleTimeListener, addColorPaletteListener, addChangeColorListener } from '../../../js/cellular-automaton-frontend/eventHandlers.js';
import { retrieveGlobalData, setDocumentFields } from '../../../js/cellular-automaton-frontend/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { updateCanvas } from '../../../js/cellular-automaton-frontend/updateCanvas.js';
import { enrichGlobalDataWithFromEndData } from '../../../js/cellular-automaton-frontend/enrichGlobalDataWithFrontEndData.js';
import { stagingConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/stagingConfig.js';
import { sanityConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/sanityConfig.js';
import { attachConfigInfoToGlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/attachConfigInfoToGlobalData.js';
import { initialisationConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/initialisationConfig.js';

console.log("Loading main.js")

var config = {
    gridHeight: 192,
    gridWidth: 192,
    targetCycleTime: 50,
    addRandomness: true,
    randomnessAmount: -1.5,
    randomisePeriodicityShiftAndTopology: true,
    gridPeriodicityShiftX: null,
    gridPeriodicityShiftY: null,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'variable',
    metaRule: "VariableMix",
    initialisation: "random",
    ruleSwitchPeriod: 20000,
    ruleEvolvePeriod: 2000,
    config: stagingConfigs["Mixed"],
    initialisationConfig: initialisationConfigs["Random"],
    sanityConfig: sanityConfigs["Default"],
};

var globalData = new GlobalData(config);
enrichGlobalDataWithFromEndData(globalData);

window.onload = function() {
    addRandomnessCheckboxListener(globalData);
    addFullscreenCornerButtonListener();
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

    retrieveGlobalData(globalData);
    setDocumentFields(globalData);
    setFindNeighbour(globalData);
    attachConfigInfoToGlobalData(globalData)
    setCellUpdateRule(globalData);

    if (true) {
        initialiseGrid(globalData).then(() =>{
            gameLoop(globalData, updateCanvas);
        })
        .catch((error) => {
            console.error("Error initialising the grid: ", error)
        });
    }

}








