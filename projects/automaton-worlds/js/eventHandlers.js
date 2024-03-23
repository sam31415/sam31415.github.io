import { submitValue, updateRandomnessValue } from './formHandlers.js';

export function addFullscreenButtonListener(canvas) {
    document.getElementById('fullscreenButton').addEventListener('click', function() {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) { // Firefox
            canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) { // IE/Edge
            canvas.msRequestFullscreen();
        }
    });
}

export function addSubmitListener(globalData) {
    document.getElementById('submitButton').addEventListener('click', function() {
        submitValue(globalData);
    });
}

export function determineColorPalette(globalData){
    var yellow = 'rgb(247, 255, 28)'
    var blue = 'rgb(13, 112, 255)'
    var grey = 'rgb(240, 239, 239)'
    var black = 'rgb(0, 0, 0)'

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
    else if (globalData.colorPalette == 'black') {
        globalData.backgroundColor = black;
        globalData.activatedColor = blue;
        globalData.deadColor = yellow;
        globalData.superActivatedColor = grey;
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
}