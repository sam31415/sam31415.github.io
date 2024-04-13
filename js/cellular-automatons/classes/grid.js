
export class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8Array(width * height);
        this.rows = new Array(height);
    }

    get(i, j) {
        return this.data[i * this.width + j];
    }

    set(i, j, value) {
        this.data[i * this.width + j] = value;
    }
}
