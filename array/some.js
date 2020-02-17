function some(arr, fn, thisArg) {
  fn = thisArg === undefined ? fn : fn.bind(thisArg);
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr && fn(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

module.exports = some;
