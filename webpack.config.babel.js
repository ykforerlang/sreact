module.exports = {
	entry: {
		index: './index.js'
	},
	output: {
		path: './build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel'
			}
		]
	}
};
