
export class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8Array(this.width * this.height);
        this.rows = new Array(this.height);
        this.transposed = false;
        this.get = this.getNormal;
        this.set = this.setNormal;
    }

    static fromArray(data, transpose = false, flipX = false, flipY = false) {
        const height = data.length;
        const width = data[0].length;
        const grid = new Grid(width, height);
        for (let i = 0; i < height; i++) {
            if (flipY) {
                i = height - i - 1;
            }
            for (let j = 0; j < width; j++) {
                if (flipX) {
                    j = width - j - 1;
                }
                grid.set(i, j, data[i][j]);
            }
        }
        if (transpose) {
            grid.transpose();
        }
        return grid;
    }

    transpose() {
        [this.width, this.height] = [this.height, this.width];
        [this.get, this.set] = this.transposed ? [this.getNormal, this.setNormal] : [this.getTransposed, this.setTransposed];
        this.transposed = !this.transposed;
    }

    flipX() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width / 2; j++) {
                const temp = this.get(i, j);
                this.set(i, j, this.get(i, this.width - j - 1));
                this.set(i, this.width - j - 1, temp);
            }
        }
    }

    flipY() {
        for (let i = 0; i < this.height / 2; i++) {
            for (let j = 0; j < this.width; j++) {
                const temp = this.get(i, j);
                this.set(i, j, this.get(this.height - i - 1, j));
                this.set(this.height - i - 1, j, temp);
            }
        }
    }

    getNormal(i, j) {
        return this.data[i * this.width + j];
    }

    setNormal(i, j, value) {
        this.data[i * this.width + j] = value;
    }

    getTransposed(i, j) {
        return this.data[j * this.height + i];
    }

    setTransposed(i, j, value) {
        this.data[j * this.height + i] = value;
    }
}
