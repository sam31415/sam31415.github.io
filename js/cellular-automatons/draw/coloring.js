export function driftColorPalette(globalData) {
    if (Math.random() < 1.0) {
        //globalData.activatedColor = driftColor(globalData.activatedColor);
        globalData.superActivatedColor = driftColor(globalData.superActivatedColor);
        globalData.deadColor = driftColor(globalData.deadColor);
    }
}

export function driftColor(color) {
    let driftedColor = {};
    for (let channel in color) {
        if (channel == 't') continue; // Skip transparency channel (if present
        let driftAmount = Math.floor(Math.random() * 3) - 1;  // Generate a new drift amount for each channel
        let driftedValue = color[channel] + driftAmount;
        driftedValue = Math.max(0, Math.min(255, driftedValue)); // Ensure value is within 0-255 range
        driftedColor[channel] = driftedValue;
    }
    driftedColor['t'] = color['t'];
    return driftedColor;
}

export function determineColorPalette(globalData) {
    var yellow = { r: 247, g: 255, b: 28, t: 255 };
    var blue = { r: 13, g: 112, b: 255, t: 255 };
    var grey = { r: 240, g: 239, b: 239, t: 255 };
    var black = { r: 0, g: 0, b: 0, t: 255 };
    var darkGrey = { r: 75, g: 75, b: 75, t: 255 };
    var mediumGrey = { r: 175, g: 175, b: 175, t: 255 };
    var whitish = { r: 240, g: 240, b: 240, t: 255 };
    var randomColor1 = { r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256), t: 255 };
    var randomColor2 = { r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256), t: 255 };
    var redblue1 = {r: 221, g: 85, b: 12, t: 255};
    var redblue2 = {r: 49, g: 130, b: 189, t: 255};
    var transparent = { r: 0, g: 0, b: 0, t: 0 };

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
    } else if (globalData.colorPalette == 'redblue') {
        globalData.backgroundColor = black;
        globalData.activatedColor = whitish;
        globalData.deadColor = redblue1;
        globalData.superActivatedColor = redblue2;
    } else if (globalData.colorPalette == 'variable') {
        globalData.backgroundColor = black;
        globalData.activatedColor = whitish;
        globalData.deadColor = randomColor1;
        globalData.superActivatedColor = randomColor2;
    } else if (globalData.colorPalette == 'mouseAnimation') {
        globalData.backgroundColor = transparent;
        globalData.activatedColor = blue;
        globalData.deadColor = black;
        globalData.superActivatedColor = yellow;
    }
}
