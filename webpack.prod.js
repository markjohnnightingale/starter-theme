var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    output: {
        publicPath: '/wp-content/themes/lockacademy-v2/dist/'
    }
});