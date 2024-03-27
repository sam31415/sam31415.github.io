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
    setCellUpdateRule(globalData);
    drawBackground(globalData);

    initializeGrid(globalData).then(() =>{
        gameLoop(globalData);
    })
    .catch((error) => {
        console.error("Error initialising the grid: ", error)
    });

    if (globalData.serverMode) {
        const express = require('express');
        const app = express();
        app.use(express.json());
    
        // Serialize the grid data into JSON
        app.get('/grid', (req, res) => {
            // Run the game loop and update the grid
            gameLoop();

            // Send the grid data to the client
            res.json(globalData.grid);
        });

        app.post('/grid-received', (req, res) => {
            // The client has received the grid data, you can now send the next one
            console.log('Grid data received by the client');
            res.sendStatus(200);
        });  

        // Start the server
        const port = 3000;  // Change this to your desired port
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
        
        }
}

