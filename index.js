/**
 * @param {number} n
 * @returns {number}
 */
function leibnizSeries(n) {
  var ret = 0;
  for (var i = 0; i <= n; i++) {
    ret += Math.pow(-1, i) / (2 * i + 1);
  }
  return 4 * ret;
}

module.exports = leibnizSeries;
