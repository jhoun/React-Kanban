const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use((req, res, next) => {
  next('route');
})

if(!module.parent){
    app.listen(8080, () => {
    console.log('Server started on port 8080');
  });
}

module.exports = app;