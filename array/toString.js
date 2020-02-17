function toString(arr) {
  let result = "";
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result = result + arr[i];
    }
    if (i + 1 < len) {
      result = result + ",";
    }
  }
  return result;
}

module.exports = toString;
