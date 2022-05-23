const loginTwo = (req) => {
  try {
    const { mail, password } = req.body;
    return checkLogin(mail, password);
  }
  catch (e) {
    showError(e);
  }
}

// const checkLogin = (mail, password) => {
//   if (mail && password) {
//     return true;
//   }
//   return false;
// }

// const showError = (err) => {
//   console.log('Sorry, you have an ', err);
// }

module.exports = loginTwo;