const express = require('express');
const morgan = require('morgan');
const model = require('./model');
const formHelpers = require('./formHelpers')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('./public'));
app.use(morgan('tiny'));

app.post('/formSubmit/', (req, res) => {
  const user = formHelpers.parseUserData(req);

  model.User.create(user, (userErr, userRes) => {
    const userId = userRes.insertId;

  });
});

app.listen(port);