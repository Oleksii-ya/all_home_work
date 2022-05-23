const createUser = require("../controllers/user.controller");
const User = require("../model/user.model");

function toto(){
  console.log('banana')
}

describe("UserController", () => {
  User.create = jest.fn(toto);
  test("should have a createUser function", () => {
    createUser();

    expect(User.create).toBeCalledTimes(1);
  });
});
