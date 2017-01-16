var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/scripts/index.js'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: "assets/js/",
	},
	devServer: {
    devtool: 'source-map',
		contentBase: path.resolve(__dirname, 'public'),
	},
	module: {
		loaders: [{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
    }, {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //loader: 'url-loader?limit=10000',
      loader: 'url-loader',
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file-loader',
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader?name=[name].[ext]&publicPath=assets/images/&outputPath=app/images/'
    }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Homepage',
			filename: 'index.html',
	      	template: 'src/templates/index.html'
	    })
	]
}
