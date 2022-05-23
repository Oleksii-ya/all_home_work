const hasValue = require("./getUpperCaseForUserName");

describe("check the function of translating the user name to uppercase", () => {
  test("pass the user name Booba, should return the user name in uppercase", () => {
    expect(hasValue("Booba")).toBe("BOOBA");
  });
  test("pass the user name Bob, should return the user name in uppercase", () => {
    expect(hasValue("Bob")).toBe("BOB");
  });
  test("pass an empty string, we expect to receive an empty string", () => {
    expect(hasValue("")).toBe("");
  });
  test("we pass the data type different from the string, we expect to receive an error", () => {
    expect(() => {
      hasValue(888);
    }).toThrow(Error);
  });
});
