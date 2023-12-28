const manageList = require('../manage-list')

describe("mangeList Function", () => {
    test("Should return a new function", () => {
      const actualOutput = manageList([]);
      const expectedOutput = 'function';
      expect(typeof actualOutput).toEqual(expectedOutput);
    })
    test("if given an empty array, will return 'List is empty'", () => {
        const input = [];
        const deleteListItem = manageList(input);
        const expectedOutput = 'List is empty';
        expect(deleteListItem()).toEqual(expectedOutput);
      });
      test("Returns a new array with a different reference in memory'", () => {
        const input = [];
        const deleteListItem = manageList(input);
        expect(deleteListItem()).not.toBe(input);
      });
      test("when deleteListItem is given an a present, that is not on the list, will return 'Present is not on the list'", () => {
        const input = ['train'];
        const deleteListItem = manageList(input);
        const expectedOutput = 'Present is not on the list';
        expect(deleteListItem('gameboy')).toEqual(expectedOutput);
      });
      test("When present has been successfully removed, and no presents are left on the list, will return 'List is empty", () => {
        const input = ['train'];
        const deleteListItem = manageList(input);
        const expectedOutput = 'List is empty';
        expect(deleteListItem('train')).toEqual(expectedOutput);
      });
      test("When given an array of multiple presents, will remove given present from the list and return the rest of the array", () => {
        const input = ['train', 'gameboy', 'bike'];
        const deleteListItem = manageList(input);
        const expectedOutput = ['gameboy', 'bike'];
        expect(deleteListItem('train')).toEqual(expectedOutput);
      });
      test("When given an array of multiple presents, will remove will remove each present after function is invoked, until ", () => {
        const input = ['train', 'gameboy', 'bike', 'golf clubs'];
        const deleteListItem = manageList(input);
        expect(deleteListItem('train')).toEqual(['gameboy', 'bike', 'golf clubs']);
        expect(deleteListItem('bike')).toEqual(['gameboy', 'golf clubs']);
        expect(deleteListItem('gameboy')).toEqual(['golf clubs']);
        expect(deleteListItem('golf clubs')).toEqual('List is empty');
      });
      test("Checking for mutation of original array", () => {
        const input = ['train', 'gameboy', 'bike', 'golf clubs'];
        const inputCopy = [...input]
        const deleteListItem = manageList(input);
        deleteListItem('train');
        deleteListItem('bike')
        expect(input).toEqual(inputCopy);
      });
})