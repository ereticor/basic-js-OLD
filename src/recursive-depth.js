module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        counter += this.calculateDepth(arr.flat());
        break;
      }
    }
    return counter;
  }
};