import { Grid } from "../classes/grid.js";
import { loadImage } from "./loadImage.js";


export function initialiseMask(globalData, image) {
    console.log('Attempting to load image');
    return loadImage('grLogoLarge.png').then(image => {
        const grid = new Grid(globalData.gridWidth, globalData.gridHeight);
        const mask = new Grid(globalData.gridWidth, globalData.gridHeight);
        const scaleX = image[0].length / globalData.gridWidth;
        const scaleY = image.length / globalData.gridHeight;
        const scale = Math.max(scaleX, scaleY);
        const imageCornerX = Math.floor((globalData.gridWidth - image[0].length / scale) / 2);
        const imageCornerY = Math.floor((globalData.gridHeight - image.length / scale) / 2);
        const background_mask = 1;

        for (let y = 0; y < globalData.gridHeight; y++) {
            for (let x = 0; x < globalData.gridWidth; x++) {
                if (
                    //x < imageCornerX || (x - imageCornerX) * scale >= image[0].length ||
                    y < imageCornerY || (y - imageCornerY) * scale >= image.length) {
                    mask.set(y, x, background_mask);
                    continue;
                }
                // Map the grid coordinates to the image coordinates
                let imageX = Math.floor((x - imageCornerX) * scale);
                let imageY = Math.floor((y - imageCornerY) * scale);
                // Initialize the grid cell based on the color of the corresponding pixel in the image
                if (image[imageY][imageX] === 0) {
                    mask.set(y, x, 0);
                } else {
                    mask.set(y, x, 1);
                }
            }
        }
        globalData.mask = mask;
    }).catch(error => {
        console.log('Image loading failed, not using a mask.');
        console.error('Error loading image:', error);
        globalData.mask = new Grid(globalData.gridWidth, globalData.gridHeight);
    });
}
