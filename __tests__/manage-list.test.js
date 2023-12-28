const manageList = require('../manage-list')

describe("mangeList Function", () => {
    test("Should return a new function", () => {
      const actualOutput = manageList();
      expectedOutput = 'function';
      expect(typeof actualOutput).toEqual(expectedOutput);
    })
})