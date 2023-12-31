function processPresentRequest(string) {
  const requestData = {
    to: undefined,
    from: undefined,
    presents: undefined,
    presentsTotal: 0,
  };
  if (string.length === 0) {
    console.error("So sorry, your letter has been lost in the post :(");
  } else if (
    !string.startsWith("Dear ") ||
    !string.includes(", for Christmas I would like: ") ||
    !/From [^]*$/.test(string)
  ) {
    console.error(
      "Your letter is not in the right format, you're now on the naughty list"
    );
  } else {
    requestData.to = string.split(",")[0].replace("Dear ", "").trim();
    requestData.from = string.split(". From ")[1].trim();
    const getPresentsAsString = string.split(": ")[1].split(".")[0].trim();
    const splitPresentsIntoArray = getPresentsAsString
      .split(",")
      .map((item) => item.trim());
    const uniquePresentsArray = [...new Set(splitPresentsIntoArray)];
    requestData.presents = uniquePresentsArray;
    requestData.presentsTotal = requestData.presents.length;
  }
  return requestData;
}

module.exports = processPresentRequest;
