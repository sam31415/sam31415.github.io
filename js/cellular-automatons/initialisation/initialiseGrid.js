import { initialiseGridRandom } from "./initialiseGridRandom.js";
import { initialiseMask } from "./initialiseMask.js";


export async function initializeGrid(globalData, image) {
    if (globalData.logo !== null) {
        await initialiseMask(globalData, image);
    }
    if (globalData.initialisation == "zero") {
        globalData.grid = new Grid(globalData.gridWidth, globalData.gridHeight);
        globalData.redraw = new Grid(globalData.gridWidth, globalData.gridHeight);
    } else {
        return initialiseGridRandom(globalData);
    }

}
