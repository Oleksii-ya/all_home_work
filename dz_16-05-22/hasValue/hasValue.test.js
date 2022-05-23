const hasValue = require("./hasValue");

describe("checking the function of finding an element in an array", () => {
  const arr = ["toto", "booba", 12345];

  test("passed array element, should return true", () => {
    expect(hasValue("booba", arr)).toBe(true);
  });
  test("passed reference to array element, should return true", () => {
    expect(hasValue(arr[1], arr)).toBe(true);
  });
  test("passed a link to the -1 element of the array, should return false", () => {
    expect(hasValue(arr[-1], arr)).not.toBe(true);
  });
  test("passed a link to next after the last element of the array, should return false", () => {
    const next = arr.length + 1;
    expect(hasValue(arr[next], arr)).not.toBe(true);
  });
  test("passed an element that does not exist in the array, should return false", () => {
    expect(hasValue("ruba", arr)).not.toBe(true);
  });
});