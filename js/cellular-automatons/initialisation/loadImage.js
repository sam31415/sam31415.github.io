
export function loadImage(src) {
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
