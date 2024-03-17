import { gameLoop } from '../../../js/cellular-automatons/gameFunctions.js';
import { initializeGrid } from "../../../js/cellular-automatons/initialisation.js";
import { addRuleListener, determineColorPalette, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener } from './eventHandlers.js';
import { retrieveGlobalData } from './formHandlers.js';

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

    initializeGrid(globalData).then(() =>{
        gameLoop(globalData);
    })
    .catch((error) => {
        console.error("Error initialising the grid: ", error)
    });
    
}


