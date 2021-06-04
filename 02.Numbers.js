function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
// Cheaching two numbers are equal
numberEquals(0.1 + 0.2, 0.3);

// -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_VALUE < Number.MAX_SAFE_INTEGER < Infinity
