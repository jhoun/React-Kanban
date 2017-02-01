const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const main = require('./routes/main');


app.use(bodyParser.urlencoded({
  extended:true
}));

app.use((req, res, next) => {
  next('route');
})

app.use('/main', main);

if(!module.parent){
    app.listen(8080, () => {
    console.log('Server started on port 8080');
    db.sequelize.sync();
  });
}

module.exports = app;