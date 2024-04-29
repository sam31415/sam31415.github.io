export function createWeightedSampler(items) {
    // Compute the sum of all probabilities
    let totalProb = Object.values(items).reduce((a, b) => a + b, 0);

    // Compute the cumulative probabilities
    let cumulativeProbs = Object.values(items).reduce((a, v, i) => [...a, v / totalProb + (a[i - 1] || 0)], []);

    // Return a function that samples a key
    return function() {
        let rand = Math.random();
        let index = cumulativeProbs.findIndex(prob => rand < prob);
        return Object.keys(items)[index];
    }
}