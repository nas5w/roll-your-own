function reduce(arr, fn, initialValue) {
  const len = arr.length;
  let acc;
  let initialIndex = 0;
  if (initialValue === undefined) {
    acc = arr[0];
    initialIndex = 1;
  } else {
    acc = initialValue;
  }
  for (let i = initialIndex; i < len; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

module.exports = reduce;
