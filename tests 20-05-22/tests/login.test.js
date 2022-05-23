const login = require("../login/login");

describe("login function", () => {
  checkSignature = (mail, password) => {
    if (mail && password) {
      return true;
    }
    return false;
  };

  checkLogin = jest.fn(checkSignature);
  test("should return true, pass right object", () => {
    data = {
      body: {
        mail: 888,
        password: 333,
      },
    };
    expect(login(data)).toBe(true);
  });

  test("should return error, not pass data", () => {
    expect(() => login()).toThrow(Error("please pass data"));
  });
  test("should return error, not pass wrong data type", () => {
    expect(() => login("test")).toThrow(Error("please pass object"));
  });
  test("should return error, pass wrong signature", () => {
    expect(() => login({ a: 111 })).toThrow(
      Error("incorrect object signature")
    );
  });
});
