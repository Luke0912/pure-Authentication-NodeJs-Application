const configuration = {
  PATHS: {
    REGISTER: '/api/register',
    LOGIN: '/api/login',
  },
  METHODS: {
    POST: 'POST',
  },
  PORT: 5000,
  HTTP_STATUS_CODES: {
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    OK: 200,
    CREATED: 201,
  },
  CONTENT_TYPE: {
    'Content-Type': 'application/json',
  },
};

module.exports = configuration;
