function countPresent(arr, present) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i]) && arr[i] === present) {
      count++;
    }
    else if (Array.isArray(arr[i])){
        count += countPresent(arr[i], present)
    }
  }
  return count;
}

module.exports = countPresent;
