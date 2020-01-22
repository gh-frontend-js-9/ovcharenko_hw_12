const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    devServer: {
        publicPath: "/",
        compress: true,
        port: 8080
    },
    entry: './src/components/messages/message.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|svg)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: './assets/images',
                    name: '[name].[ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/components/messages/message.html',
            filename: './message.html'
        })
    ]
};