function some(arr, fn) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr && fn(arr[i])) {
      return true;
    }
  }
  return false;
}

module.exports = some;
