import HtmlWebpackPlugin                                       from 'html-webpack-plugin';
import MiniCssExtractPlugin                                    from 'mini-css-extract-plugin';
import webpack, { ProgressPlugin, HotModuleReplacementPlugin } from 'webpack';
import type { WebpackPluginInstance }                          from 'webpack';
import { BundleAnalyzerPlugin }                                from 'webpack-bundle-analyzer';

import type { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new ProgressPlugin(),
	];
	
	if (isDev) {
		plugins.push(new HotModuleReplacementPlugin());
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}));
	}
	
	return plugins;
}
