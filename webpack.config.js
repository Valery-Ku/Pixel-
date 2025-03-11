const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path'); 

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
 plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html"),
 }),
 new MiniCssExtractPlugin({
    filename: "assets/style.css",
})
],
 module: {
    rules: [
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                targets: "defaults",
                presets: [
                  ['@babel/preset-env']
                ]
              }
            }
          },
        ]
}}