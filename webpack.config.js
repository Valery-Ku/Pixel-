const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path'); 

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },
 plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html"),
 })],
 module: {
    rules: [
        {
            test: /\.html$/i,
            loader: "html-loader",
        }]
}}