var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            proxy: 'http://new.lockacademy.com.test:8080'
        })
    ],
    devtool: 'inline-source-map'
});