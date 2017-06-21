var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: [
						'es2015'
					],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
			},
			// {test: /\.css$/, use: 'css-loader'},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({ 
					fallback: 'style-loader',						
					use: 'css-loader!less-loader'
				})
			},
		]
	},
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],

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