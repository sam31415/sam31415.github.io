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