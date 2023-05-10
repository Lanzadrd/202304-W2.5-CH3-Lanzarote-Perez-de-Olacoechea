describe("When given a sum function", () => {
  describe("When we give it 2 and 6 as parameters", () => {
    test("We should receive 8", () => {
      const value1 = 2;
      const value2 = 6;
      const expected = 8;

      const result = value1 + value2;

      expect(result).toBe(expected);
    });
  });
});
