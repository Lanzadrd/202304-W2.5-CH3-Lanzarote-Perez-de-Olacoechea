import { fizzbuzz } from "./fizzbuzz.js";

describe("When given a fizbuzz function", () => {
  describe("When we give it 2 and 6 as parameters", () => {
    test("We should receive the array", () => {
      const start = 2;
      const end = 6;
      const expected = [2, "Fizz", 4, "Buzz", "Fizz"];

      const result = fizzbuzz(start, end);

      expect(result).toEqual(expected);
    });
  });
});
