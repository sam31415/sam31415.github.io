
export class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8Array(width * height);
        this.rows = new Array(height);
    }

    get(i, j) {
        return this.data[i * this.width + j];
    }

    set(i, j, value) {
        this.data[i * this.width + j] = value;
    }
}


function loadImage(src) {
    console.log('Loading image:', src); 
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            console.log('Image loaded:', src);
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const grid = [];
            for (let y = 0; y < img.height; y++) {
                const row = [];
                for (let x = 0; x < img.width; x++) {
                    const idx = (y * img.width + x) * 4;
                    const r = data[idx];
                    const g = data[idx + 1];
                    const b = data[idx + 2];
                    const avg = (r + g + b) / 3;
                    row.push(avg > 128 ? 1 : 0);
                }
                grid.push(row);
            }
            resolve(grid);
        };
        img.onerror = () => {
            console.error('Error loading image:', src);
            reject(new Error('Error loading image'));
        };
        img.src = src;
    });
}
// Initialize the grid randomly


export function initializeGridRandom(globalData) {
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

export function initializeMask(globalData, image) {
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

export async function initializeGrid(globalData, image) {
    await initializeMask(globalData, image);
    return initializeGridRandom(globalData);
    
}
