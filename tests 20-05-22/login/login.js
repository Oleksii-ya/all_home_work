const login = (req) => {
  if (req === undefined) {
    throw new Error("please pass data");
  }

  if (typeof req !== "object") {
    throw new Error("please pass object");
  }

  const signature =
    "body" in req && "mail" in req.body && "password" in req.body;

  if (!signature) {
    throw new Error("incorrect object signature");
  }

  const { mail, password } = req.body;

  return checkLogin(mail, password);
};

// const checkLogin = (mail, password) => {
//   if (mail && password) {
//     return true;
//   }
//   return false;
// };

module.exports = login;
