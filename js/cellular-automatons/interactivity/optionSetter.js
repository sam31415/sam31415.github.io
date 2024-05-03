import { findNeighbourFlipY, findNeighbourNoFlip, findNeighbourFlipX, findNeighbourFlipXY } from '../neighbors/gridTopology.js';
import { changeRule } from "../rules/changeRule.js";

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
    changeRule(globalData, true);
}

