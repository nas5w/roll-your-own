function filter(arr, fn, thisArg) {
  fn = thisArg === undefined ? fn : fn.bind(thisArg);
  const len = arr.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (i in arr && fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = filter;
