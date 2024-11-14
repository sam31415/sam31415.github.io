import { GlobalData } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/classes/globalData.js';
import { gameLoop } from '../../../js/cellular-automaton-backend/cellular-automaton-backend/gameLoop.js';
import { initialiseGrid } from "../../../js/cellular-automaton-backend/cellular-automaton-backend/initialisation/initialiseGrid.js";
import { addChangeColoringRuleListener, addRuleListener, addRandomnessCheckboxListener, addMouseMoveListener, addMouseDownListener, addSubmitListener, addRandomnessSliderListener, addPeriodicityListeners, addCycleTimeListener, addColorPaletteListener } from '../../../js/cellular-automaton-frontend/eventHandlers.js';
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
    randomnessAmount: -1.0,
    randomisePeriodicityShiftAndTopology: false,
    randomSeedingInMaskOnly: true,
    gridPeriodicityShiftX: 0,
    gridPeriodicityShiftY: 0,
    gridFlipX: false,
    gridFlipY: false,
    colorPalette: 'black2',
    metaRule: "VariableGR",
    initialisation: "gr",
    logo: "grLogoOuternet6.png", // "grLogoOuternet3.png",
    useLogo: true,
    config: stagingConfigs["GROuternet"],
    sanityConfig: sanityConfigs["Disabled"],
};

var globalData = new GlobalData(config);
enrichGlobalDataWithFromEndData(globalData);

export function addFullscreenButtonListener(globalData) {
    const canvasContainer = document.getElementById('canvasContainer');
    const gameCanvas = document.getElementById('gameCanvas');
    const overlayImage = document.getElementById('overlayImage');
    const fullscreenButton = document.getElementById('fullscreenButton');
    const overlayImage2 = document.getElementById('overlayImage2') || null;

    fullscreenButton.addEventListener('click', function() {
        if (canvasContainer.requestFullscreen) {
            canvasContainer.requestFullscreen();
        } else if (canvasContainer.mozRequestFullScreen) { // Firefox
            canvasContainer.mozRequestFullScreen();
        } else if (canvasContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            canvasContainer.webkitRequestFullscreen();
        } else if (canvasContainer.msRequestFullscreen) { // IE/Edge
            canvasContainer.msRequestFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', resizeCanvas);
    document.addEventListener('webkitfullscreenchange', resizeCanvas);
    document.addEventListener('mozfullscreenchange', resizeCanvas);
    document.addEventListener('MSFullscreenChange', resizeCanvas);

    function resizeCanvas() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            const aspectRatio = 1408 / 1056; // Width / Height
            const windowAspectRatio = window.innerWidth / window.innerHeight;

            if (windowAspectRatio > aspectRatio) {
                let newWidth = Math.floor(window.innerHeight * aspectRatio);
                canvasContainer.style.width = `${newWidth}px`;
                canvasContainer.style.height = `${window.innerHeight}px`;
                overlayImage.style.left = `${(window.innerWidth - newWidth) / 2 + Math.floor(newWidth * 12 / 100)}px`;  
                overlayImage.style.width = `${Math.floor(newWidth * 22 / 100)}px`;
                if (overlayImage2) {
                    overlayImage2.style.width = `${newWidth}px`;
                    overlayImage2.style.height = `${window.innerHeight}px`;
                    overlayImage2.style.left = `${(window.innerWidth - newWidth) / 2}px`;
                }
            } else {
                canvasContainer.style.width = `${window.innerWidth}px`;
                canvasContainer.style.height = `${Math.floor(window.innerWidth / aspectRatio)}px`;
                overlayImage2.style.width = `${window.innerWidth}px`;
                overlayImage2.style.height = `${Math.floor(window.innerWidth / aspectRatio)}px`;
            }
        } else {
            canvasContainer.style.width = '1408px';
            canvasContainer.style.height = '1056px';
            overlayImage.style.left = `12%`;  
            overlayImage.style.width = `22%`;
            if (overlayImage2) {
                overlayImage2.style.width = '1408px';
                overlayImage2.style.height = '1056px';
                overlayImage2.style.left = `0px`;
            }
        }
    }
}


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
    //adjustCanvasSize(globalData);
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








