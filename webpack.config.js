var path = require('path');
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	devtool: false,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader'
					// options: {
					// 	presets: ['@babel/preset-env', '@babel/preset-react']
					// }
				}
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff|woff2|ttf|eot|ico)$/,
				loader: 'url-loader' //'file-loader?name=fonts/[name].[ext]'
			}
		]
	},
	externals: {
		react: 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
	}
};
