var environment = process.env.NODE_ENV || 'development';
console.info('Working in ' + environment + ' environment');

switch(environment) {
  case 'production':
    module.exports = require('./config/webpack.production.config');
    break;
  case 'development':
    module.exports = require('./config/webpack.dev.config');
    break;
  default:
    console.error('Unknown environment ' + environment);
}
