import { Grid } from "../classes/grid.js";


// Initialize the grid randomly

export function initialiseGridRandom(globalData) {
    return Promise.resolve().then(() => {
        globalData.grid = new Grid(globalData.gridWidth, globalData.gridHeight);
        globalData.redraw = new Grid(globalData.gridWidth, globalData.gridHeight);
        for (var i = 0; i < globalData.gridHeight; i++) {
            for (var j = 0; j < globalData.gridWidth; j++) {
                if (globalData.initialisation == "gr" && globalData.mask.get(i, j) === 1) {
                    globalData.grid.set(i, j, 0);
                    continue;
                }
                var rnd = Math.random();
                globalData.grid.set(i, j, 0);
                globalData.grid.set(i, j, rnd < 0.75 ? 1 : globalData.grid.get(i, j));
                globalData.grid.set(i, j, rnd < 0.5 ? 2 : globalData.grid.get(i, j));
                globalData.grid.set(i, j, rnd < 0.25 ? 3 : globalData.grid.get(i, j));

                globalData.redraw.set(i, j, 1);
            }
        }
    });
}
