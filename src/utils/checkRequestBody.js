const checkRequestBody = (body) => {
  let validProperties = ['name', 'email', 'password'];
  var emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

  let receivedProperties = Object.keys(body);

  let isNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  for (let key of receivedProperties) {
    if (!validProperties.includes(key)) {
      return false;
    }

    if (key === 'name') {
      isNameValid = body[key].length >= 6;
    }

    if (key === 'email') {
      isEmailValid = body[key].length < 256;

      isEmailValid = emailRegex.test(body[key]);
    }

    if (key === 'password') {
      isPasswordValid = body[key].length > 8;

      isPasswordValid = passwordRegex.test(body[key]);
    }
  }
  return isNameValid && isEmailValid && isPasswordValid;
};

module.exports = checkRequestBody;
