module.exports = function check(str, bracketsConfig) {
  let arrayOfBrackets = [],
    i,
    size = bracketsConfig.length;
  for (i = 0; i < size; i++) {
    arrayOfBrackets.push(bracketsConfig[i].join(""));
  }
  size = arrayOfBrackets.length;
  for (i = 0; i < size; i++) {
    while (str.includes(arrayOfBrackets[i])) {
      str = str.replace(arrayOfBrackets[i], "");
      i = -1;
    }
  }
  return !str;
}
