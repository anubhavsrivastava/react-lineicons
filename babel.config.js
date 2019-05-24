module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'@babel/plugin-transform-arrow-functions',
		[
			'@babel/plugin-transform-runtime',
			{
				regenerator: true
			}
		]
	]
};
