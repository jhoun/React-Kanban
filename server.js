const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const Card = db.Card;
const main = require('./routes/main');


app.use(bodyParser.urlencoded({
  extended:true
}));

app.use((req, res, next) => {
  next('route');
})

app.use('/main', main);

// When you want to get to '/'' path
app.get('/', (req,res) => {
    Card.findAll()
    .then((card)  => {
      res.json(card);
    })
})

if(!module.parent){
    app.listen(8080, () => {
    console.log('Server started on port 8080');
    db.sequelize.sync();
  });
}

module.exports = app;