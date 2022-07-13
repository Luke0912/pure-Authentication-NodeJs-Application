const configuration = require('./config');
const http = require('http');
const { login, register } = require('./controllers/auth.controller');

http
  .createServer((request, response) => {
    const { url: URL, method: METHOD } = request;

    switch (true) {
      case configuration.PATHS.REGISTER === URL &&
        configuration.METHODS.POST === METHOD:
        register(request, response);
        break;

      case configuration.PATHS.LOGIN === URL &&
        configuration.METHODS.POST === METHOD:
        login(request, response);
        break;

      default:
        response.writeHead(
          configuration.HTTP_STATUS_CODES.NOT_FOUND,
          configuration.CONTENT_TYPE
        );
        response.end(
          JSON.stringify({
            code: configuration.HTTP_STATUS_CODES.NOT_FOUND,
            message: 'Not Found',
          })
        );
    }
  })
  .listen(configuration.PORT, () => {
    console.log(`NodeJS Server Started On Port ${configuration.PORT}`);
  });
