function checkArr(arr) {
  if (arr === undefined) {
    throw new Error("please pass data");
  }

  if (!Array.isArray(arr)) {
    throw new Error("please pass array");
  }

  for (let val of arr) {
    if (typeof val !== "sting") {
      throw new Error("there is value not string in array");
    }
  }

  return arr;
}

module.exports = checkArr;
