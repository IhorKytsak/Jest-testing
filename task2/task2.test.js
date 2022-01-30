const { pythagoreanTriples, isPrime } = require('./task2');

describe('Function check if the numbers', () => {
  test('are mutually prime', () => {
    expect(isPrime(9, 40)).toBe(true);
    expect(isPrime(3, 4)).toBe(true);
  });

  test('are not mutually prime', () => {
    expect(isPrime(6, 8)).toBe(false);
    expect(isPrime(33, 44)).toBe(false);
  });
});

describe('Function find all Pythagorean triples', () => {
  test('n is not a number ', () => {
    expect(pythagoreanTriples('7')).toBe('A positive integer is expected');
  });

  test('n is not a positive', () => {
    expect(pythagoreanTriples(-21)).toBe('A positive integer is expected');
  });

  test('n is not an integer', () => {
    expect(pythagoreanTriples(1.05)).toBe('A positive integer is expected');
  });

  test('natural numbers, each of which does not exceed n', () => {
    const result1 = [
      [3, 4, 5],
      [5, 12, 13],
      [8, 15, 17],
      ['Number of Pythagorean triples <= 20', 3]
    ];
    const result2 = [
      [3, 4, 5],
      [5, 12, 13],
      [7, 24, 25],
      [8, 15, 17],
      [9, 40, 41],
      [11, 60, 61],
      [12, 35, 37],
      [13, 84, 85],
      [16, 63, 65],
      [20, 21, 29],
      [28, 45, 53],
      [33, 56, 65],
      [36, 77, 85],
      [39, 80, 89],
      [48, 55, 73],
      [65, 72, 97],
      ['Number of Pythagorean triples <= 100', 16]
    ];
    expect(pythagoreanTriples(3)).toBe('Not exist');
    expect(pythagoreanTriples(20)).toEqual(result1);
    expect(pythagoreanTriples(100)).toEqual(result2);
  });
});
