const { Application } = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('../routes');
const errorHandler = require('../middlewares/errorHandler');

module.exports = ({ app }) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.text({ type: 'text/plain' }));
  app.use(cookieParser());

  app.use('/v1', routes);

  app.use(errorHandler);
};
