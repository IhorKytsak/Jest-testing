function isPrime(a, b) {
  for (let i = 2; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      return false;
    }
  }
  return true;
}

function pythagoreanTriples(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return 'A positive integer is expected';
  }

  let count = 0;
  let arr = [];
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        if (a * a + b * b === c * c && a <= b) {
          if (isPrime(a, b)) {
            arr.push([a, b, c]);
            count++;
          }
        }
      }
    }
  }
  if (count === 0) return 'Not exist';

  arr.push([`Number of Pythagorean triples <= ${n}`, count]);
  return arr;
}

//console.log(pythagoreanTriples(100));

module.exports = { pythagoreanTriples, isPrime };
