
export function updateRandomnessValue(globalData, value) {
    globalData.randomnessAmount = parseFloat(value);
    document.getElementById('randomnessAmountValue').textContent = value;
}

export function submitValue(globalData) {
    Object.keys(globalData).forEach(key => {
        let element = document.getElementById(key);
        if (element) {
            var value;
            if (element.type === 'checkbox') {
                value = element.checked;
            } else if (element.type === 'number' || element.type === 'range') {
                value = parseFloat(element.value);
            } else {
                value = element.value;
            }
            localStorage.setItem(key, value);
        }
    });

    // Reload the page
    location.reload();
}

export function retrieveGlobalData(globalData) {
    Object.keys(globalData).forEach(key => {
        let item = localStorage.getItem(key);
        if (item !== null) {
            if (typeof globalData[key] === 'boolean') {
                globalData[key] = item === 'true';
            } else if (typeof globalData[key] === 'number') {
                globalData[key] = parseFloat(item);
            } else {
                globalData[key] = item;
            }
        }
    });
}

export function setDocumentFields(globalData) {
    // Set the default values of the form inputs
    Object.keys(globalData).forEach(key => {
        let element = document.getElementById(key);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = globalData[key];
            } else {
                element.value = globalData[key];
            }
        }
    });
}

export function adjustCanvasSize(globalData) {
    // Adjust the canvas size
    globalData.canvas.width = Math.max(globalData.gridHeight, globalData.gridWidth);
    globalData.canvas.height =  Math.max(globalData.gridHeight, globalData.gridWidth);
    globalData.canvasCornerX = 0 //Math.floor((globalData.canvas.width - globalData.gridWidth) / 2);
    globalData.canvasCornerY = 0 //Math.floor((globalData.canvas.height - globalData.gridHeight) / 2);

    // Adjusts the html canvas size so that no border remains in full screen mode
    var htmlCanvas = document.getElementById('gameCanvas');
    if (globalData.gridHeight > globalData.gridWidth) {
        var newWidth = Math.floor(globalData.gridWidth / globalData.gridHeight * 800);
        htmlCanvas.style.width = newWidth + 'px';
        htmlCanvas.style.height = 800 + 'px';
        htmlCanvas.width = newWidth * globalData.gridHeight / 800;
        htmlCanvas.height = globalData.gridHeight;
    } else {
        var newHeight = Math.floor(globalData.gridHeight / globalData.gridWidth * 800);
        htmlCanvas.style.width = 800 + 'px';
        htmlCanvas.style.height = newHeight + 'px';
        htmlCanvas.width = globalData.gridWidth;
        htmlCanvas.height = newHeight * globalData.gridWidth / 800;
    }

    // Adjust image data size
    globalData.imageData = new Uint8ClampedArray(4 * globalData.gridWidth * globalData.gridHeight);
}



