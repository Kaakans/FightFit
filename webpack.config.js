var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var babelOptions = {
  	presets: [
      "es2015"
    ],
	plugins: [
		['transform-react-jsx', { pragma: 'h' }]
	]
};

module.exports = {
	// entry file - starting point for the app
	entry: './',

	// where to dump the output of a production build
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				loader: 'babel-loader',
				options: babelOptions
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({ 
					fallback: 'style-loader',						
					use: 'css-loader!less-loader'
				})
			},
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
		]
	},
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},

	// enable Source Maps
	devtool: 'source-map',

	devServer: {
		// serve up any static files from src/
		contentBase: __dirname,

		// enable gzip compression:
		compress: true,

		// enable pushState() routing, as used by preact-router et al:
		historyApiFallback: true
	}
};