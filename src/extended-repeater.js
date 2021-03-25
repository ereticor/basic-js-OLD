module.exports = function repeater(str, options) {
  str = String(str);
  let additional = "";
  let newStr = "";
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additional += options.addition + options.additionSeparator;
  }
  additional += options.addition;
  for (let j = 1; j < options.repeatTimes; j++) {
    newStr += str + additional + options.separator;
  }
  newStr += str + additional;
  return newStr;
};
  