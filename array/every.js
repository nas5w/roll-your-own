function every(arr, fn) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr && !fn(arr[i])) {
      return false;
    }
  }
  return true;
}

module.exports = every;
