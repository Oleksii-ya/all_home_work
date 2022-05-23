const User = require("../model/user.model");
const createUser = () => {
  User.create();
};

module.exports = createUser;
