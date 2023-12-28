function selectToysByType(presents, type) {
  const matchingToys = presents.filter(
    (item) => item.type.toLowerCase() === type.toLowerCase()
  );
  if (matchingToys.length === 0) {
    console.error("No presents of that type");
  }
  return matchingToys;
}
module.exports = selectToysByType;
