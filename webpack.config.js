const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
	publicPath: '/',
	clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
		title: "My app",
		filename: "index.html",
		template:"src/templates/index.html"
	})
	],
};