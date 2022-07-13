const fs = require('fs');
const data = require('../db/newData.json');

const checkEmailPassword = (loggedUser) => {
  for (let value of data) {
    if (
      value.email === loggedUser.email &&
      value.password === loggedUser.password
    ) {
      return { status: true, message: 'Login Successful' };
    }
  }
  return { status: false, message: 'User Cannot Be LoggedIn' };
};
module.exports = checkEmailPassword;
