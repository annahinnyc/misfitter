const express = require('express');
const morgan = require('morgan');
const model = require('./model');
const formHelpers = require('./formHelpers')

const app = express();
const port = 3100;

app.use(express.json());
app.use(express.static('./public'));
app.use(morgan('tiny'));

app.post('/formSubmit/', (req, res) => {
  const user = formHelpers.parseUserData(req);
  const address = formHelpers.parseAddressData(req);
  const creditCard = formHelpers.parseCreditCardData(req);

  model.User.create(user, (userErr, userRes) => {
    const userId = userRes.insertId;
    address.userId = userId;
    creditCard.userId = userId;

    model.Address.create(address, (addressErr, addressRes) => {
      model.CreditCard.create(creditCard, (creditCardErr, creditCardRes) => {
        if (userErr || addressErr || creditCardErr) {
          res.json({userErr, addressErr, creditCardErr});
        } else {
          res.json({success: true});
        }
      });
    });
  });
});

app.listen(port);