const getUserByName = require("./getUserByName");

describe("get the user by his name", () => {
  const arr = [{ name: "Alex" }, { name: "Bob" }, { name: "Pit" }];
  test("compare the result of the function with the correct object of the user", () => {
    expect(getUserByName(arr, "Alex")).toEqual({ name: "Alex" });
  });
  test("check if there are two users in the array with the same name, should display the first in the list", () => {
    arrTwo = [...arr];
    arrTwo.push({ name: "Alex" });
    expect(getUserByName(arrTwo, "Alex")).toBe(arrTwo[0]);
  });
  test("users with different names must be different", () => {
    expect(getUserByName(arr, "Alex")).not.toEqual({ name: "Bobo" });
  });
});
