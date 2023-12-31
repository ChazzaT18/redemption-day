const selectToysByType = require("../select-toys-by-type");

describe("selectToysByType Function", () => {
  test("Returns an array", () => {
    const input = [];
    const actualOutput = selectToysByType(input, "Toys");
    expectedOutput = true;
    expect(Array.isArray(actualOutput)).toEqual(expectedOutput);
  });
  test("Returns a new array with a different reference in memory", () => {
    const input = [];
    const actualOutput = selectToysByType(input);
    expect(actualOutput).not.toBe(input);
  });
  test("Returns an array with a single matching object when the type is matched", () => {
    const input = [{ name: "bike", type: "outdoors" }];
    const inputCopy = [...input]
    const actualOutput = selectToysByType(input, "outdoors");
    const expectedOutput = [{ name: "bike", type: "outdoors" }];
    expect(input).toEqual(inputCopy);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Logs an error message if the array doesn't contain the specified type", () => {
    const consoleSpy = jest.spyOn(console, "error");
    const input = [{ name: "bike", type: "outdoors" }];
    selectToysByType(input, "Toys");
    expect(consoleSpy).toHaveBeenCalledWith("No presents of that type");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    consoleSpy.mockRestore();
  });
  test("Returns an array with a single matching object when the type is matched to only one object", () => {
    const input = [
      { name: "bike", type: "outdoors" },
      { name: "gameboy", type: "electrical" },
    ];
    const actualOutput = selectToysByType(input, "outdoors");
    const expectedOutput = [{ name: "bike", type: "outdoors" }];
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Returns an array with all matching results when given multiple objects", () => {
    const input = [
      { name: "bike", type: "outdoors" },
      { name: "shoes", type: "clothes" },
      { name: "socks", type: "clothes" },
      { name: "train", type: "toy" },
      { name: "stacking cups", type: "toy" },
    ];
    const actualOutput = selectToysByType(input, "clothes");
    const expectedOutput = [
      { name: "shoes", type: "clothes" },
      { name: "socks", type: "clothes" },
    ];
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Checks for mutation of original array", () => {
    const input = [{ name: "bike", type: "outdoors" },
    { name: "shoes", type: "clothes" },
    { name: "socks", type: "clothes" },
    { name: "train", type: "toy" },
    { name: "stacking cups", type: "toy" }];
    const inputCopy = [...input]
    selectToysByType(input, "outdoors");
    expect(input).toEqual(inputCopy);
  })
})
