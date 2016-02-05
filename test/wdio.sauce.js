var config = require('./wdio.conf').config;

config.host = 'ondemand.saucelabs.com';
config.port = 80;
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.updateJob = true;

exports.config = config;
