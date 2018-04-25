module.exports = {
	root: true, // make to not take in any user specified rules in parent folders
	extends: [
		'pretty',
		'pretty/import',
		'pretty/promise',
		'pretty/async',
		'pretty/es6',
		'pretty/node',
		'pretty/prettier'
	],
	env: {
		es6: true,
		browser: true,
		node: true,
		jest: true
	},
	rules: {
		'node/no-unpublished-require': [
			'error',
			{
				allowModules: ['react-app-rewire-eslint']
			}
		]
	}
}
