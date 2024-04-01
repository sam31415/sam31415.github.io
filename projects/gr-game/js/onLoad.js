import { gameLoop, drawBackground } from '../../../js/cellular-automatons/gameFunctions.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation.js";
import { addRuleListener, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener } from './eventHandlers.js';
import { retrieveGlobalData } from './formHandlers.js';
import { determineColorPalette, setFindNeighbour, setCellUpdateRule} from '../../../js/cellular-automatons/optionSetter.js';

export function onLoad(globalData, canvas) {
    addRandomnessCheckboxListener(globalData);
    addFullscreenButtonListener(canvas);
    addMouseMoveListener(globalData, canvas);
    addMouseDownListener(globalData, canvas);
    addSubmitListener(globalData);
    addRandomnessSliderListener(globalData);
    addPeriodicityListeners(globalData);
    addTimeoutListener(globalData);
    addColorPaletteListener(globalData);
    addRuleListener(globalData);

    retrieveGlobalData(globalData, canvas);
    determineColorPalette(globalData);
    setFindNeighbour(globalData);
    setCellUpdateRule(globalData, false, true);
    setCellUpdateRule(globalData, true, true);
    drawBackground(globalData);

    initializeGrid(globalData).then(() =>{
        gameLoop(globalData);
    })
    .catch((error) => {
        console.error("Error initialising the grid: ", error)
    });
    
}


