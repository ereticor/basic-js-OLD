module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter += this.calculateDepth([].concat(...arr), counter);
        break;
      }
    }
    return counter;
  }
};