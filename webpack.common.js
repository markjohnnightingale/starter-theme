var imageminloader = require('imagemin-webpack').imageminLoader;
var imageminPng = require('imagemin-pngquant');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var modernizrConfig = require('./modernizr-config.json');
var modernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        publicPath: '/app/themes/lockacademy-v2/dist/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader', {
                    loader: imageminloader,
                    options: {
                        plugins: [imageminPng()]
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'main.bundle.css' }),
        new modernizrWebpackPlugin(modernizrConfig),
    ],
    stats: {
        colors: true
    },
    externals: {
        jquery: 'jQuery'
    }
}