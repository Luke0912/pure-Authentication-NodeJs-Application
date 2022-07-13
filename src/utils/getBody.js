const getBody = (request) => {
  return new Promise((resolve, reject) => {
    let body = '';
    request
      .on('error', (err) => {
        reject(err);
      })
      .on('data', (chunk) => {
        body += chunk;
      })
      .on('end', () => {
        resolve(JSON.parse(body));
      });
  });
};

module.exports = getBody;
