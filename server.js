const express = require('express');
const PORT = 8080;
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const Card = db.Card;
const cards = require('./routes/card');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./app/webpack.config.js');

// Check to see what dev environment we are in
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use((req, res, next) => {
  next('route');
})

app.use('/api/card', cards);

if (isDeveloping) {
  app.set('host', 'http://localhost');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });
  const response = (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.resolve(__dirname, 'dist/index.html')));
    res.end();
  };

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  //put routes before here
  app.get('*', response);
} else {
  app.use(express.static(`${__dirname}/dist`));
  app.get('*', (req, res) => {
    res.write(
      fs.readFileSync(path.resolve(__dirname, 'dist/index.html'))
    );
    res.end();
  });
}

const onStart = (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  );
  db.sequelize.sync();
};

app.listen(port, 'localhost', onStart);

module.exports = app;