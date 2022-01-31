const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

development = (mode) => (mode === "development")
production = (mode) => (mode === "production")

module.exports = (env, arg) => ({
    mode: arg.mode,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, production(arg.mode) ? 'docs' : 'dist'),
        publicPath: '/',
        clean: true,
    },

    ...(development(arg.mode) && {
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
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
});