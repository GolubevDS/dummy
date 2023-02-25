import path    from 'node:path';

import webpack from 'webpack';
import type { Configuration, RuleSetRule } from 'webpack';

import { buildCssLoader }  from '../webpack/loaders/buildCssLoader';
import type { BuildPaths } from '../webpack/types/config';

export default ({ config }: { config: Configuration }) => {
	const paths: BuildPaths = {
		src: path.resolve(__dirname, '..', '..', 'src'),
		build: '',
		html: '',
		entry: '',
	};
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');
	
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
			return { ...rule, exclude: /\.svg$/i };
		}
		
		return rule;
	});
	
	config.module?.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});
	config.module?.rules?.push(buildCssLoader(true));
	
	config.plugins?.push(new webpack.DefinePlugin({
		__IS_DEV__: JSON.stringify(true),
	}));
	
	return config;
};
