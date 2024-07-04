const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    // entry: {
    //     bundle: path.resolve(__dirname, 'index.js')
    // },
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
        // by putting the bracket's its name will be change by the different entry point. 
    },

    module: {
        rules: [
            {
                test:/\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                    options: {
                    presets: ['@babel/env','@babel/react']
                    },
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'development',
            filename: 'index.html',
            template: 'index.html'
        })
    ],

    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build'),
        },
        port: 8000,
        // point to your dvelopment backend server.
        proxy: [
            {   context: ['/api'],
                target: 'http://localhost:5000',
            },
        ],
    },
}