import { PrimeSifter, arrayOfN } from './../src/PrimeSifter.js';

describe("PrimeSifter", () => {
  test("should create an array from 2 to n", () => {
    const n = 10;
    expect(arrayOfN(n)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  
});