var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
    devtool: 'cheap-eval-source-map',
		contentBase: path.join(__dirname, 'dist'),		
	},
	module: {
		loaders: [{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader'],
      include: path.resolve(__dirname, "src/styles")
    }, {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //loader: 'url-loader?limit=10000',
      loader: 'url-loader',
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file-loader',
    }]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({  // Also generate a about.html
			title: 'About page',
			filename: 'about.html',
	      	template: 'src/partials/default.html'
	    })
	]
}
