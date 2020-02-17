function concat(...arrs) {
  const len = arrs.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    const arrLen = arrs[i].length;
    for (let j = 0; j < arrLen; j++) {
      result.push(arrs[i][j]);
    }
  }
  return result;
}

module.exports = concat;
