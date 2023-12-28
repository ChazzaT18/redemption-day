function manageList(list) {
  let newList = [...list];
  return function deleteListItem(item) {
    if (!newList.includes(item) && newList.length !== 0) {
      return "Present is not on the list";
    }
    newList = newList.filter((present) => present !== item);
    if (newList.length === 0) {
      return "List is empty";
    }
    return newList;
    }
}

module.exports = manageList;
