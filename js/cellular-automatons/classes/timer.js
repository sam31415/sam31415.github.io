// Timer.js
export class Timer {
    constructor() {
        this.startTime = 0;
        this.totalTime = 0;
    }

    start() {
        this.startTime = performance.now();
    }

    stop() {
        this.totalTime += performance.now() - this.startTime;
    }

    reset() {
        this.totalTime = 0;
    }

    getTime() {
        return this.totalTime;
    }
}