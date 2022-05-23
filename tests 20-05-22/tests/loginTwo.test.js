const loginTwo = require("../loginTwo/loginTwo");

describe("login function two", () => {
  checkSignature = (mail, password) => {
    if (mail && password) {
      return true;
    }
    return false;
  };

  catchError = () => {
    throw new Error()
  };

  checkLogin = jest.fn(checkSignature);
  showError = jest.fn(catchError);
  test("should return true, pass right object", () => {
    data = {
      body: {
        mail: 888,
        password: 333,
      },
    };
    expect(loginTwo(data)).toBe(true);
  });
  test("should return error, pass wrong data", () => {
    expect(() => loginTwo()).toThrow();
  });
});
