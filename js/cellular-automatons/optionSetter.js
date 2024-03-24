import { updateCellValueTest, updateCellValueConway, updateCellValueBB, updateCellValueBBMod, updateCellValueBBTrace, updateCellValueBBTrace2, 
    updateCellValueBBTrace3, updateCellValueBBTrace4, updateCellValueBBTrace5, updateCellValueBBTrace6, updateCellValueBBTrace7,
    updateCellValueBBTrace8, updateCellValueBBTrace9, updateCellValueBBTrace10, updateCellValueSecondary1, updateCellValueSecondary2,
    updateCellValueStationary1, updateCellValueStationary2 } from './rules.js';
import { findNeighbourFlipY } from './neighbours.js';
import { findNeighbourNoFlip } from './neighbours.js';
import { findNeighbourFlipX } from './neighbours.js';
import { findNeighbourFlipXY } from './neighbours.js';
import { changeRule4Colors } from './rulesMeta.js';
import { changeRule3Colors } from './rulesMeta.js';
import { changeRule2Colors } from './rulesMeta.js';

export function updatePeriodicityShiftAndTopology(globalData){
    if (Math.random() < 0.0001) {
        globalData.gridPeriodicityShiftX = Math.floor(Math.random() * globalData.gridWidth);
        console.log("Periodicity shift X: " + globalData.gridPeriodicityShiftX);
    }
    if (Math.random() < 0.0001) {
        globalData.gridPeriodicityShiftY = Math.floor(Math.random() * globalData.gridHeight);
        console.log("Periodicity shift Y: " + globalData.gridPeriodicityShiftY);
    }
    if (Math.random() < 0.0001) {
        globalData.gridFlipX = !globalData.gridFlipX;
        setFindNeighbour(globalData)
        console.log("Flip X: " + globalData.gridFlipX);
    }
    if (Math.random() < 0.0001) {
        globalData.gridFlipY = !globalData.gridFlipY;
        setFindNeighbour(globalData)
        console.log("Flip Y: " + globalData.gridFlipY);
    }
}

export function setFindNeighbour(globalData){
    if (globalData.gridFlipX && globalData.gridFlipY) {
        globalData.findNeighbour = findNeighbourFlipXY;
    } else if (globalData.gridFlipX) {
        globalData.findNeighbour = findNeighbourFlipX;
    } else if (globalData.gridFlipY) {
        globalData.findNeighbour = findNeighbourFlipY;
    } else {
        globalData.findNeighbour = findNeighbourNoFlip;
    }
}

export function setCellUpdateRule(globalData){
    if (globalData.rule == "Conway") {
        globalData.updateCellValue = updateCellValueConway;
    } else if (globalData.rule == "BB") {
        globalData.updateCellValue = updateCellValueBB;
    } else if (globalData.rule == "BBMod") {
        globalData.updateCellValue = updateCellValueBBMod;
    } else if (globalData.rule == "BBTrace") {
        globalData.updateCellValue = updateCellValueBBTrace;
    } else if (globalData.rule == "BBTrace2") {
        globalData.updateCellValue = updateCellValueBBTrace2;
    } else if (globalData.rule == "BBTrace3") {
        globalData.updateCellValue = updateCellValueBBTrace3;
    } else if (globalData.rule == "BBTrace4") {
        globalData.updateCellValue = updateCellValueBBTrace4;
    } else if (globalData.rule == "BBTrace5") {
        globalData.updateCellValue = updateCellValueBBTrace5;
    } else if (globalData.rule == "BBTrace6") {
        globalData.updateCellValue = updateCellValueBBTrace6;
    } else if (globalData.rule == "BBTrace7") {
        globalData.updateCellValue = updateCellValueBBTrace7;
    } else if (globalData.rule == "BBTrace8") {
        globalData.updateCellValue = updateCellValueBBTrace8;
    } else if (globalData.rule == "BBTrace9") {
        globalData.updateCellValue = updateCellValueBBTrace9;
    } else if (globalData.rule == "BBTrace10") {
        globalData.updateCellValue = updateCellValueBBTrace10;
    } else if (globalData.rule == "BBTraceSecondary1") {
        globalData.updateCellValue = updateCellValueSecondary1;
    } else if (globalData.rule == "BBTraceSecondary2") {
        globalData.updateCellValue = updateCellValueSecondary2;
    } else if (globalData.rule == "Variable2Colors") {
        changeRule2Colors(globalData, true);
    } else if (globalData.rule == "Variable3Colors") {
        changeRule3Colors(globalData, true);
    } else if (globalData.rule == "Variable4Colors") {
        changeRule4Colors(globalData, true);
    } else if (globalData.rule == "Stationary1") {
        globalData.updateCellValue = updateCellValueStationary1;
    } else if (globalData.rule == "Stationary2") {
        globalData.updateCellValue = updateCellValueStationary2;
    } else if (globalData.rule == "TestSecondary") {
        globalData.updateCellValue = updateCellValueTest;
    }
}

export function determineColorPalette(globalData){
    var yellow = 'rgb(247, 255, 28)'; // 'rgb(128, 30, 10)' // 'rgb(7, 56, 128)' // 
    var blue = 'rgb(13, 112, 255)';
    var grey = 'rgb(240, 239, 239)';
    var black = 'rgb(0, 0, 0)';
    var darkGrey = 'rgb(75, 75, 75)';
    var mediumGrey = 'rgb(175, 175, 175)';
    var whitish = 'rgb(240, 240, 240)';

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
