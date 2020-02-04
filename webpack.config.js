const path = require('path');
require('babel-polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        messages: ['babel-polyfill','./src/components/messages/message.js'],
        schedule: ['babel-polyfill','./src/components/schedule/schedule.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|svg)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: './assets/images',
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'message.html',
            template: './src/components/messages/message.html',
            chunks: ['messages'],
        }),
        new HtmlWebpackPlugin({
            filename: 'schedule.html',
            template: './src/components/schedule/schedule.html',
            chunks: ['schedule'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};