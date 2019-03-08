const config = require('./webpack.config.babel');

const releaseConfig = Object.assign({}, config);

releaseConfig.devtool = 'none';
releaseConfig.mode = 'production';

module.exports = releaseConfig;
