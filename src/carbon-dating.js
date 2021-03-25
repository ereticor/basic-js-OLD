const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "string" || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= 15) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD/Math.LN2);
};
