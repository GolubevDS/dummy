import type { Configuration } from 'webpack';
import { buildDevServer }     from './buildDevServer';
import { buildLoaders }       from './buildLoaders';
import { buildPlugins }       from './buildPlugins';
import { buildResolvers }     from './buildResolvers';
import type { BuildOptions }  from './types/config';

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		devtool: isDev ? 'inline-source-map' : undefined,
		output: {
			clean: true,
			filename: '[name].[contenthash].js',
			path: paths.build,
		},
		devServer: isDev ? buildDevServer(options) : undefined,
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
	};
}
