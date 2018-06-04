const env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];  // you use brackets when using variable to access property

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
