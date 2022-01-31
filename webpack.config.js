const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

development = (mode) => (mode === "development")
production = (mode) => (mode === "production")

module.exports = (mode) => ({
    mode,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, production(mode) ? 'docs' : 'dist'),
        publicPath: '/',
        clean: true,
    },

    ...(development(mode) && {
        devtool: 'inline-source-map',
        devServer: {
            static: './dist',
        },
    }),

    module: {
        rules: [{
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        }, ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            title: "My app",
            filename: "index.html",
            template: "src/templates/index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
});