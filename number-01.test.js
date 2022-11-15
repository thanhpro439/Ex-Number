import { isIncreasingNumber } from './number-01';

describe('findMostFrequentNumber(numberList)', () => {
  it('should return false if n < 0 or n >= 1000000', () => {
    expect(isIncreasingNumber(-2)).toBe(false);
    expect(isIncreasingNumber(5000000)).toBe(false);
  });

  it('should return false if n < 10', () => {
    expect(isIncreasingNumber(4)).toBe(false);
    expect(isIncreasingNumber(6)).toBe(false);
  });
  it('should return false if n is not an increasing number', () => {
    expect(isIncreasingNumber(153)).toBe(false);
    expect(isIncreasingNumber(111)).toBe(false);
  });
  it('should return true if n is an increasing number', () => {
    expect(isIncreasingNumber(123)).toBe(true);
    expect(isIncreasingNumber(489)).toBe(true);
  });
});
