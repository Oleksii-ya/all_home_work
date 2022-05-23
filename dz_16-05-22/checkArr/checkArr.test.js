const checkArr = require("./checkArr");

describe("check array elements to string", () => {
  test("should return each element of array as string", () => {
    expect(() => {
      checkArr();
    }).toThrow(Error("please pass data"));
  });

  test("should return each element of array as string", () => {
    expect(() => {
      checkArr(111);
    }).toThrow(Error("please pass array"));
  });

  test("should return each element of array as string", () => {
    expect(() => {
      checkArr(["aaa", 333]);
    }).toThrow(Error("there is value not string in array"));
  });
});
