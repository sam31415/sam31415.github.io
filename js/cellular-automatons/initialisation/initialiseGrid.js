import { initialiseGridRandom } from "./initialiseGridRandom.js";
import { initialiseMask } from "./initialiseMask.js";


export async function initializeGrid(globalData, image) {
    await initialiseMask(globalData, image);
    return initialiseGridRandom(globalData);

}
