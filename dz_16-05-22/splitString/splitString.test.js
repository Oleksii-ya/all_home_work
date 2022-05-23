const splitString = require("./splitString");

describe("pass a string, expect receive an array of characters", () => {
  const testString = "Hello world!";

  function testSplitString(str) {
    arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }

  test("pass a string expect to get an array of characters of this string", () => {
    expect(splitString(testString)).toEqual(testSplitString(testString));
  });
  test("pass an empty string, expect an empty array", () => {
    expect(splitString("")).toEqual([]);
  });
  test("pass a data type other than a string to the function, expect to get an error", () => {
    expect(() => {
      splitString(undefined);
    }).toThrow(Error);
  });
  test("pass a data type other than a string to the function, expect to get an error", () => {
    expect(() => {
      splitString({});
    }).toThrow(Error);
  });
});

// function splitString(str) {
//     if (string === undefined) {
//       throw new Error("Invalid argument");
//     }

//     return str.split("");
//   }