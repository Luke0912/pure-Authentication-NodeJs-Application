const getBody = require('../utils/getBody');
const configuration = require('../config');
const checkRequestBody = require('../utils/checkRequestBody');
const crypto = require('crypto');
const saveUser = require('../utils/saveUser');
const checkEmailPassword = require('../utils/checkEmailPassword');

const register = async (request, response) => {
  try {
    const body = await getBody(request);

    const isValidRequest = checkRequestBody(body);
    if (!isValidRequest) {
      throw new Error('Invalid Request Body Passed');
    }

    let registerUser = {
      _id: Math.floor(4 + Math.random() * 10),
      ...body,
      password: crypto.createHash('sha256').update(body.password).digest('hex'),
    };
    let isSuccessfulSave = saveUser(registerUser);
    if (!isSuccessfulSave.status) {
      throw new Error(isSuccessfulSave.message);
    }
    response.writeHead(
      configuration.HTTP_STATUS_CODES.OK,
      configuration.CONTENT_TYPE
    );

    response.end(
      JSON.stringify({
        code: configuration.HTTP_STATUS_CODES.CREATED,
        message: 'User Registered Successful',
        data: registerUser,
      })
    );
  } catch (error) {
    response.writeHead(
      configuration.HTTP_STATUS_CODES.BAD_REQUEST,
      configuration.CONTENT_TYPE
    );

    response.end(
      JSON.stringify({
        code: configuration.HTTP_STATUS_CODES.BAD_REQUEST,
        message: error.message,
      })
    );
  }
};

const login = async (request, response) => {
  try {
    const loginBody = await getBody(request);

    const isValidLogin = checkRequestBody(loginBody);

    if (!isValidLogin) {
      throw new Error('Invalid Request');
    }
    let loggedUser = {
      ...loginBody,
      password: crypto
        .createHash('sha256')
        .update(loginBody.password)
        .digest('hex'),
    };
    const isSuccessfulCheck = checkEmailPassword(loggedUser);
    if (!isSuccessfulCheck.status) {
      throw new Error(isSuccessfulCheck.message);
    }

    response.writeHead(
      configuration.HTTP_STATUS_CODES.OK,
      configuration.CONTENT_TYPE
    );

    response.end(
      JSON.stringify({
        code: configuration.HTTP_STATUS_CODES.OK,
        message: 'User Login Successful',
      })
    );
  } catch (error) {
    response.writeHead(
      configuration.HTTP_STATUS_CODES.BAD_REQUEST,
      configuration.CONTENT_TYPE
    );

    response.end(
      JSON.stringify({
        code: configuration.HTTP_STATUS_CODES.BAD_REQUEST,
        message: error.message,
      })
    );
  }
};

module.exports = { register, login };
