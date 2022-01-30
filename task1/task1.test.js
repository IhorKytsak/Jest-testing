const { findSmallest2p } = require('./task1');

describe('Function findSmallest2p', () => {
  test('n is not a number ', () => {
    expect(findSmallest2p(true)).toBe('A positive integer is expected');
    expect(findSmallest2p('7')).toBe('A positive integer is expected');
  });

  test('n is not a positive', () => {
    expect(findSmallest2p(-21)).toBe('A positive integer is expected');
  });

  test('n is not an integer', () => {
    expect(findSmallest2p(1.05)).toBe('A positive integer is expected');
    expect(findSmallest2p(40.6)).toBe('A positive integer is expected');
  });

  test('get the smallest value 2p that is greater than n ', () => {
    expect(findSmallest2p(0)).toBe(1);
    expect(findSmallest2p(7)).toBe(8);
    expect(findSmallest2p(55)).toBe(64);
    expect(findSmallest2p(512)).toBe(1024);
  });
});
