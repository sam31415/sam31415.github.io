import { submitValue, updateRandomnessValue } from './formHandlers.js';
import { setFindNeighbour, setCellUpdateRule} from '../cellular-automaton-backend/cellular-automaton-backend/interactivity/optionSetter.js';
import { determineColorPalette } from '../cellular-automaton-backend/cellular-automaton-backend/draw/coloring.js';
import { saveEventData } from './saveEventData.js';

export function addRandomnessCheckboxListener(globalData) {
    document.getElementById('addRandomness').addEventListener('change', function() {
        globalData.addRandomness = this.checked; // Set the variable to the checkbox's state
    });
}

export function addFullscreenButtonListener(globalData) {
    document.getElementById('fullscreenButton').addEventListener('click', function() {
        if (globalData.canvas.requestFullscreen) {
            globalData.canvas.requestFullscreen();
        } else if (globalData.canvas.mozRequestFullScreen) { // Firefox
            globalData.canvas.mozRequestFullScreen();
        } else if (globalData.canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
            globalData.canvas.webkitRequestFullscreen();
        } else if (globalData.canvas.msRequestFullscreen) { // IE/Edge
            globalData.canvas.msRequestFullscreen();
        }
    });
}

export function addFullscreenCornerButtonListener() {
    document.getElementById('fullscreenButton').addEventListener('click', function() {
        var container = document.getElementById('canvasContainer');
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.mozRequestFullScreen) { // Firefox
            container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) { // Chrome, Safari and Opera
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) { // IE/Edge
            container.msRequestFullscreen();
        }
    });
}

export function addMouseMoveListener(globalData) {
    globalData.canvas.addEventListener('mousemove', function(event) {
        if (event.shiftKey){
            var rect = globalData.canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
    
            // Calculate the size of each cell on the screen
            var cellScreenSizeX = rect.width / globalData.gridWidth;
            var cellScreenSizeY = rect.height / globalData.gridHeight;
    
            // Calculate the clicked cell
            var j = Math.floor(x / cellScreenSizeX);
            var i = Math.floor(y / cellScreenSizeY);

            globalData.grid.set(i, j, 1);
        }
    });
}

export function addMouseDownListener(globalData) {
    globalData.canvas.addEventListener('mousedown', function(event) {
        var rect = globalData.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Calculate the size of each cell on the screen
        var cellScreenSizeX = rect.width / globalData.gridWidth;
        var cellScreenSizeY = rect.height / globalData.gridHeight;

        // Calculate the clicked cell
        var j = Math.floor(x / cellScreenSizeX);
        var i = Math.floor(y / cellScreenSizeY);
        
        if (!event.shiftKey && !event.ctrlKey) {
            globalData.grid.set((i+1) % globalData.gridHeight, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set((i-1+globalData.gridHeight) % globalData.gridHeight, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set((i-1+globalData.gridHeight) % globalData.gridHeight, (j-1+globalData.gridWidth) % globalData.gridWidth, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, (j-1+globalData.gridWidth) % globalData.gridWidth, 1);
        } else if (event.shiftKey && !event.ctrlKey) {
            globalData.grid.set(i, (j+1) % globalData.gridWidth, 1);
            globalData.grid.set(i, j, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, j, 1);
        } else if (!event.shiftKey && event.ctrlKey) {
            globalData.grid.set(i, j, 1);
            globalData.grid.set((i+1) % globalData.gridHeight, j, 1);
        } else if (event.shiftKey && event.ctrlKey) {
            globalData.grid.set(i, j, 1);
            globalData.grid.set(i, (j+1) % globalData.gridWidth, 1);
        }
    });
}

export function addSubmitListener(globalData) {
    document.getElementById('submitButton').addEventListener('click', function() {
        submitValue(globalData);
    });
}

export function addRandomnessSliderListener(globalData) {
    document.getElementById('randomnessAmount').addEventListener('input', function() {
        updateRandomnessValue(globalData, this.value);
    });
}

export function addPeriodicityListeners(globalData) {
    document.getElementById('gridPeriodicityShiftX').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.gridPeriodicityShiftX = value;
        setFindNeighbour(globalData);
    });
    document.getElementById('gridPeriodicityShiftY').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.gridPeriodicityShiftY = value;
        setFindNeighbour(globalData);
    });
    document.getElementById('gridFlipX').addEventListener('change', function() {
        globalData.gridFlipX = this.checked;
        setFindNeighbour(globalData);
    });
    document.getElementById('gridFlipY').addEventListener('change', function() {
        globalData.gridFlipY = this.checked;
        setFindNeighbour(globalData);
    });
    

}

export function addCycleTimeListener(globalData) {
    document.getElementById('targetCycleTime').addEventListener('input', function() {
        let value = parseInt(this.value);
        if (isNaN(value)) {
            value = 0;
        }
        globalData.targetCycleTime = value;
    });
}

export function addRuleListener(globalData) {
    document.getElementById('metaRule').addEventListener('change', async function() {
        globalData.metaRule = this.value;
        globalData.changeMetaRuleFlag = true;
        globalData.currentRuleAndStyle = globalData.ruleClass.getName();
        //setCellUpdateRule(globalData);
    });
}

export function addColorPaletteListener(globalData) {
    document.getElementById('colorPalette').addEventListener('change', function() {
        globalData.colorPalette = this.value;
        determineColorPalette(globalData);
    });
}


export function addChangeColoringRuleListener(globalData) {
    document.getElementById('changeRule').addEventListener('click', function() {
        globalData.changeRuleFlag = true;
    });
    document.getElementById('changeBaseRule').addEventListener('click', function() {
        globalData.changeBaseRuleFlag = true;
    });
    document.getElementById('changeColoringRule').addEventListener('click', function() {
        globalData.changeStyleFlag = true;
    });
    document.getElementById('evolveColoringRule').addEventListener('click', function() {
        globalData.evolveStyleFlag = true;
    });
    var element = document.getElementById('reinitialiseGrid');
    if (element != null) {
        document.getElementById('reinitialiseGrid').addEventListener('click', function() {
            globalData.reinitialiseGridFlag = true;
        });
    }
    var element = document.getElementById('recordGif');
    if (element != null) {
        document.getElementById('recordGif').addEventListener('click', function() {
            if (!globalData.recordingGif) {
                globalData.recordingGif = true;
                globalData.startRecordingGifFlag = true;
                this.textContent = 'Stop recording';
            } else {
                globalData.recordingGif = false;
                globalData.stopRecordingGifFlag = true;
                this.textContent = 'Record gif';
            }
        });
    }
}

export function addChangeColorListener(globalData) {
    document.getElementById('changeColor').addEventListener('click', function() {
        globalData.reloadColorPaletteFlag = true;
    });
}

export function addLikeButtonListeners(globalData) {
    document.getElementById('saveEventCheckbox').addEventListener('change', function() {
        globalData.saveEventData = this.checked; // Set the variable to the checkbox's state
    });

    document.getElementById('likeButton').addEventListener('click', function() {
        saveEventData(globalData, 'like');
    });

    document.getElementById('dislikeButton').addEventListener('click', function() {
        saveEventData(globalData, 'dislike');
    });
}

export function addPlayPauseStepButtonListeners(globalData) {

    const playPauseButton = document.getElementById('playPauseButton');
    playPauseButton.addEventListener('click', () => {
        globalData.paused = !globalData.paused;
        playPauseButton.textContent = globalData.paused ? 'Pause' : 'Play';
        console.log("Paused", globalData.paused);
    });

    const stepButton = document.getElementById('stepButton');
    stepButton.addEventListener('click', () => {
        globalData.paused = true;
        globalData.step = true;
    });
};
