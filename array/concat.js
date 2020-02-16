function concat(...arrs) {
  const len = arrs.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    result = [...result, ...arrs[i]];
  }
  return result;
}

module.exports = concat;
