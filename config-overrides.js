const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override(config, env) {
	const newConfig = rewireEslint(config, env)

	return newConfig
}
