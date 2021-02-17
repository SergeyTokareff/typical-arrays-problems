
exports.min = function min (array) {
  return Math.min.apply(Math, array);
}

exports.max = function max (array) {
  return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}
