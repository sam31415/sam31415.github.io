import { initializeGrid, gameLoop } from './gameFunctions.js';
import { determineColorPalette, addRandomnessCheckboxListener, addFullscreenButtonListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addTimeoutListener, addColorPaletteListener } from './eventHandlers.js';
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

    retrieveGlobalData(globalData, canvas);
    determineColorPalette(globalData);

    initializeGrid(globalData);
    gameLoop(globalData);
}


