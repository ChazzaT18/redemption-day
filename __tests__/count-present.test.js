const countPresent = require("../count-present");

describe("countPresent Function", () => {
test('Returns a number', () => {
    const input = []
    const expectedOutput = 'number'
    const actualOutput = countPresent(input)
    expect(typeof actualOutput).toEqual(expectedOutput)
    expect(actualOutput).toEqual(0)
})
test('Returns 0 When given an array with no matching element', () => {
    const input = ['train']
    const expectedOutput = 0
    const actualOutput = countPresent(input, 'gameboy')
    expect(actualOutput).toEqual(expectedOutput)
})
test('Returns 1 When given an array with a single matching element', () => {
    const input = ['train']
    const expectedOutput = 1
    const actualOutput = countPresent(input, 'train')
    expect(actualOutput).toEqual(expectedOutput)
})
test('Returns 2 When given an array with multiple matching elements', () => {
    const input = ['train', 'gameboy', 'train',]
    const expectedOutput = 2
    const actualOutput = countPresent(input, 'train')
    expect(actualOutput).toEqual(expectedOutput)
})
test('Returns 1 When given a  nested array with a single matching element', () => {
    const input = ['train', ['gameboy'],]
    const expectedOutput = 1
    const actualOutput = countPresent(input, 'gameboy')
    expect(actualOutput).toEqual(expectedOutput)
})
test('Return 4 when given multiple nested array\'s and multiple matching elements', () => {
    const input = ['train', ['gameboy'], [['gameboy', 'train', 'gameboy']], 'golf clubs', [[['gameboy']]]]
    const expectedOutput = 4
    const actualOutput = countPresent(input, 'gameboy')
    expect(actualOutput).toEqual(expectedOutput)
})
test('Return 0 when given multiple nested array\'s and no matching elements', () => {
    const input = ['train', ['gameboy'], [['gameboy', 'train']], 'gameboy', [[['train']]]]
    const expectedOutput = 0
    const actualOutput = countPresent(input, 'golf clubs')
    expect(actualOutput).toEqual(expectedOutput)
})
test('test for mutation of original array', () => {
    const input = ['train', ['gameboy'], [['gameboy', 'train',]], 'golf clubs', [[['gameboy']]]]
    const inputCopy = [...input]
    const actualOutput = countPresent(input, 'gameboy')
    expect(input).toEqual(inputCopy)
})
});
