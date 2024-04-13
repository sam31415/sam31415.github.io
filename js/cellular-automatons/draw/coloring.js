export function driftColorPalette(globalData) {
    if (Math.random() < 1.0) {
        globalData.activatedColor = driftColor(globalData.activatedColor);
        globalData.deadColor = driftColor(globalData.deadColor);
    }
}

export function driftColor(color) {
    let driftedColor = {};
    for (let channel in color) {
        let driftAmount = Math.floor(Math.random() * 3) - 1;  // Generate a new drift amount for each channel
        let driftedValue = color[channel] + driftAmount;
        driftedValue = Math.max(0, Math.min(255, driftedValue)); // Ensure value is within 0-255 range
        driftedColor[channel] = driftedValue;
    }
    return driftedColor;
}

export function determineColorPalette(globalData) {
    var yellow = { r: 247, g: 255, b: 28 };
    var blue = { r: 13, g: 112, b: 255 };
    var grey = { r: 240, g: 239, b: 239 };
    var black = { r: 0, g: 0, b: 0 };
    var darkGrey = { r: 75, g: 75, b: 75 };
    var mediumGrey = { r: 175, g: 175, b: 175 };
    var whitish = { r: 240, g: 240, b: 240 };

    if (globalData.colorPalette == 'yellow') {
        globalData.backgroundColor = yellow;
        globalData.activatedColor = black;
        globalData.deadColor = blue;
        globalData.superActivatedColor = grey;
    }
    else if (globalData.colorPalette == 'blue') {
        globalData.backgroundColor = blue;
        globalData.activatedColor = grey;
        globalData.deadColor = black;
        globalData.superActivatedColor = yellow;
    }
    else if (globalData.colorPalette == 'blue2') {
        globalData.backgroundColor = blue;
        globalData.activatedColor = yellow;
        globalData.deadColor = black;
        globalData.superActivatedColor = grey;
    }
    else if (globalData.colorPalette == 'grey') {
        globalData.backgroundColor = grey;
        globalData.activatedColor = black;
        globalData.deadColor = blue;
        globalData.superActivatedColor = yellow;
    }
    else if (globalData.colorPalette == 'grey2') {
        globalData.backgroundColor = grey;
        globalData.activatedColor = yellow;
        globalData.deadColor = black;
        globalData.superActivatedColor = blue;
    }
    else if (globalData.colorPalette == 'black') {
        globalData.backgroundColor = black;
        globalData.activatedColor = blue;
        globalData.deadColor = yellow;
        globalData.superActivatedColor = grey;
    }
    else if (globalData.colorPalette == 'black2') {
        globalData.backgroundColor = black;
        globalData.activatedColor = blue;
        globalData.deadColor = grey;
        globalData.superActivatedColor = yellow;
    }
    else if (globalData.colorPalette == 'blackTrace') {
        globalData.backgroundColor = black;
        globalData.activatedColor = grey;
        globalData.deadColor = black;
        globalData.superActivatedColor = grey;
    }
    else if (globalData.colorPalette == 'blackTrace2') {
        globalData.backgroundColor = black;
        globalData.activatedColor = black;
        globalData.deadColor = black;
        globalData.superActivatedColor = grey;
    }
    else if (globalData.colorPalette == 'blackTrace3') {
        globalData.backgroundColor = black;
        globalData.activatedColor = black;
        globalData.deadColor = grey;
        globalData.superActivatedColor = grey;
    } else if (globalData.colorPalette == 'variable') {
        globalData.backgroundColor = black;
        globalData.activatedColor = mediumGrey;
        globalData.deadColor = darkGrey;
        globalData.superActivatedColor = whitish;
    }
}
