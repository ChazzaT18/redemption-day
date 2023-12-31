const processPresentRequest = require("../process-present-request");

describe("processPresentRequest Function", () => {
  test("Returns an object ", () => {
    const input = "";
    const actualOutput = processPresentRequest(input);
    const expectedOutput = "object";
    expect(typeof actualOutput).toEqual(expectedOutput);
  });
  test("If given an empty string, console error message", () => {
    const consoleSpy = jest.spyOn(console, "error");
    const input = "";
    processPresentRequest(input);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "So sorry, your letter has been lost in the post :("
    );
    consoleSpy.mockRestore();
  });
  test("Returns object with undefined values for an empty string", () => {
    const input = "";
    const actualOutput = processPresentRequest(input);
    const expectedOutput = {
      to: undefined,
      from: undefined,
      presents: undefined,
      presentsTotal: 0,
    };
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("logs an error message for a letter that does not start with 'Dear'", () => {
    const consoleSpy = jest.spyOn(console, "error");
    const input = "Oi Santa, for Christmas I would like: Gameboy. From Charlie";
    actualOutput = processPresentRequest(input);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Your letter is not in the right format, you're now on the naughty list"
    );
    consoleSpy.mockRestore();
  });
  test("logs an error message for a letter with presents listed in an incorrect format", () => {
    const consoleSpy = jest.spyOn(console, "error");
    const input = "Dear Santa, for Christmas I demand a Gameboy. From Charlie";
    actualOutput = processPresentRequest(input);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Your letter is not in the right format, you're now on the naughty list"
    );
    consoleSpy.mockRestore();
  });
  test("logs an error message for a letter that does not end with 'from (senderName)'", () => {
    const consoleSpy = jest.spyOn(console, "error");
    const input =
      "Dear Santa, for Christmas I would like: Gameboy. Love Charlie";
    processPresentRequest(input);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Your letter is not in the right format, you're now on the naughty list"
    );
    consoleSpy.mockRestore();
  });
  test("Returns object with correct key/values for a valid letter format", () => {
    const input =
      "Dear Mrs Santa, for Christmas I would like: Gameboy. From Charlie";
    const actualOutput = processPresentRequest(input);
    const expectedOutput = {
      to: "Mrs Santa",
      from: "Charlie",
      presents: ["Gameboy"],
      presentsTotal: 1,
    };
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Updates the object correctly when given multiple presents", () => {
    const input =
      "Dear Saint Nicholas, for Christmas I would like: a decent nights sleep, new golf clubs, to win the lottery. From Charlie Tahsin";
    const actualOutput = processPresentRequest(input);
    const expectedOutput = {
      to: "Saint Nicholas",
      from: "Charlie Tahsin",
      presents: [
        "a decent nights sleep",
        "new golf clubs",
        "to win the lottery",
      ],
      presentsTotal: 3,
    };
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Removes duplicate presents in the array when given the same present multiple times", () => {
    const input =
      "Dear Mrs Santa, for Christmas I would like: Gameboy, golf clubs, PS5, Gameboy, PS5. From Charlie Tahsin";
    const actualOutput = processPresentRequest(input);
    const expectedOutput = {
      to: "Mrs Santa",
      from: "Charlie Tahsin",
      presents: ["Gameboy", "golf clubs", "PS5"],
      presentsTotal: 3,
    };
    expect(actualOutput).toEqual(expectedOutput);
  });
});
