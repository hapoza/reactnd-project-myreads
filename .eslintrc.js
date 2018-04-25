module.exports = {
	root: true, // make to not take in any user specified rules in parent folders
	extends: [
		'pretty',
		'pretty/import',
		'pretty/promise',
		'pretty/async',
		'pretty/es6',
		'pretty/node',
		'plugin:react/recommended',
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
		],
		'promise/prefer-await-to-then': 'warn',
		'promise/prefer-await-to-callbacks': 'warn',
		'promise/no-nesting': 'warn',
		'class-methods-use-this': 'off'
	}
}
