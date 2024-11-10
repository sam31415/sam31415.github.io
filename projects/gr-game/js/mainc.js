import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { initialiseGrid } from "../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/initialiseGrid.js";
import { addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addCycleTimeListener, addColorPaletteListener } from '../../../js/cellular-automaton-frontend/eventHandlers.js';
import { retrieveGlobalData, setDocumentFields, adjustCanvasSize } from '../../../js/cellular-automaton-frontend/formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { determineColorPalette } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/draw/coloring.js';
import { updateCanvas } from '../../../js/cellular-automaton-frontend/updateCanvas.js';
import { enrichGlobalDataWithFromEndData } from '../../../js/cellular-automaton-frontend/enrichGlobalDataWithFrontEndData.js';
import { stagingConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/stagingConfig.js';
import { sanityConfigs } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/config/sanityConfig.js';
import { attachConfigInfoToGlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/attachConfigInfoToGlobalData.js';


console.log("Loading main.js")

var config = {
    gridHeight: 528, // 264, // 
    gridWidth: 352, // 234, // 176, //  
    widthMult: 2, // 3,
    targetCycleTime: 0,
    addRandomness: true,
    randomnessAmount: -0.1,
    randomisePeriodicityShiftAndTopology: false,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'black2',
    metaRule: "VariableGR",
    initialisation: "random",
    logo: "grLogoOuternet.png", // "grLogoOuternet3.png",
    useLogo: true,
    config: stagingConfigs["GROuternetc"],
    sanityConfig: sanityConfigs["Disabled"],
};

var globalData = new GlobalData(config);
enrichGlobalDataWithFromEndData(globalData);


window.onload = function() {
    // addRandomnessCheckboxListener(globalData);
    addFullscreenButtonListener(globalData);
    // addMouseMoveListener(globalData);
    // addMouseDownListener(globalData);
    // addSubmitListener(globalData);
    // addRandomnessSliderListener(globalData);
    // addPeriodicityListeners(globalData);
    // addCycleTimeListener(globalData);
    // addColorPaletteListener(globalData);
    // //addRuleListener(globalData);
    // addChangeColoringRuleListener(globalData);

    retrieveGlobalData(globalData);
    setDocumentFields(globalData);
    adjustCanvasSize(globalData);
    setFindNeighbour(globalData);
    attachConfigInfoToGlobalData(globalData)
    setCellUpdateRule(globalData);

    initialiseGrid(globalData).then(() =>{
        gameLoop(globalData, updateCanvas);
    })
    .catch((error) => {
        console.error("Error initialising the grid: ", error)
    });
}








