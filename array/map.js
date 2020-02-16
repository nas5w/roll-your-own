function map(arr, fn, thisArg) {
  fn = thisArg === undefined ? fn : fn.bind(thisArg);
  const len = arr.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = fn(arr[i], i, arr);
    }
  }
  return result;
}

module.exports = map;
