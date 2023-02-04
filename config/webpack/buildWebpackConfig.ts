import type { Configuration } from 'webpack';
import { buildDevServer }     from './buildDevServer';
import { buildLoaders }       from './buildLoaders';
import { buildPlugins }       from './buildPlugins';
import { buildResolvers }     from './buildResolvers';
import type { BuildOptions }  from './types/config';

export function buildWebpackConfig({ mode, paths, isDev, port }: BuildOptions): Configuration {
	return {
		mode,
		entry: paths.entry,
		devtool: isDev ? 'inline-source-map' : undefined,
		output: {
			clean: true,
			filename: '[name].[contenthash].js',
			path: paths.build,
		},
		devServer: isDev ? buildDevServer(port) : undefined,
		plugins: buildPlugins(paths),
		module: {
			rules: buildLoaders(isDev),
		},
		resolve: buildResolvers(),
	};
}
