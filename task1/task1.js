function findSmallest2p(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return 'A positive integer is expected';
  }

  let p = 1;

  while (p <= n) {
    p = p * 2;
  }

  return p;
}

module.exports = { findSmallest2p };
