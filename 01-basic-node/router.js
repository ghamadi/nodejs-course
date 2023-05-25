const fs = require('fs');
const os = require('os');

const { buildHtmlDoc, buildUsersList, buildCreateUserForm } = require('./utils/html-builders');
const USERS = ['User 1', 'User 2', 'User Da Da'];
const USERS_FILE_PATH = './output/users.txt';

/**
 *
 * @param {(import 'http').IncomingMessage} req
 * @param {(import 'http').ServerResponse<(import 'http').IncomingMessage> & {
 *      req: (import 'http').IncomingMessage;
 * }} res
 */
function router(req, res) {
  const { url, method } = req;
  const basePath = url.replace(/\?.*$/, '');

  switch (basePath) {
    case '/':
      res.write(buildHtmlDoc(buildCreateUserForm()));
      break;

    case '/users':
      res.write(buildHtmlDoc(buildUsersList(USERS)));
      break;

    case '/create-user':
      if (method === 'POST') {
        const buffer = [];

        if (!fs.existsSync(USERS_FILE_PATH)) {
          fs.writeFileSync(USERS_FILE_PATH, '');
        }

        req.on('data', chunk => {
          buffer.push(chunk);
        });

        req.on('end', () => {
          const user = Buffer.concat(buffer).toString().replace(/user=/, '');
          fs.appendFile(USERS_FILE_PATH, `${user}${os.EOL}`, () => {});
        });
      }

      res.writeHead(302, { Location: `/` });
      break;

    default:
      break;
  }
  res.end();
}

module.exports = router;
