// import the base configuration
var config = require('./wdio.conf').config;

// and tell it to run on Sauce Labs
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.updateJob = true;

// XXX according to the WebDriverIO docs, these two lines shouldn't be
// necessary
config.host = 'ondemand.saucelabs.com';
config.port = 80;

// export the config
exports.config = config;
