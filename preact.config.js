const path = require('path');
const netlifyPlugin = require('preact-cli-plugin-netlify');

export default function (config, env) {
	netlifyPlugin(config);

	if (!env.ssr) {
		const asyncLoader = path.resolve(__dirname, 'temp/async-loader.js');
		config.resolveLoader.alias.async = asyncLoader;
		config.module.rules.forEach(loader => {
			if (/@preact\/async-loader/.test(loader.loader)) {
				loader.loader = asyncLoader;
			}
		});
	}
}