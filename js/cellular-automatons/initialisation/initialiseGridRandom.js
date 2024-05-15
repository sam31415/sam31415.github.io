import { Grid } from "../classes/grid.js";

export function initialiseGridRandom(globalData, n = 10000) {
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
                for (var k = 0; k < n; k++) {
                    if (rnd < (k + 1) / (n + 1)) {
                        globalData.grid.set(i, j, k);
                        break;
                    }
                }
                globalData.redraw.set(i, j, 1);
            }
        }
    });
}
