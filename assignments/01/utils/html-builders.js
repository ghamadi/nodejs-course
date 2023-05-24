function buildHtmlDoc(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Node Server</title>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
}

function buildUsersList(users = []) {
  return `
    <ul>
      ${users.map(user => `<li>${user}</li>`).join('\n')}
    </ul>
  `;
}

function buildCreateUserForm() {
  return `
    <form action="/create-user" method="POST">
      <label for="user">Enter User Name</label>
      <input type="text" name="user">
      <button type="submit">Submit</button>
    </form>
  `;
}

module.exports = {
  buildHtmlDoc,
  buildUsersList,
  buildCreateUserForm
};
