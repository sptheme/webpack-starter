var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/scripts/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: "assets/", // string
	},
	devServer: {
    devtool: 'cheap-eval-source-map',
		contentBase: path.resolve(__dirname, 'dist'),		
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
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader'
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
