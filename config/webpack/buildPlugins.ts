import HtmlWebpackPlugin              from 'html-webpack-plugin';
import MiniCssExtractPlugin           from 'mini-css-extract-plugin';
import { ProgressPlugin }             from 'webpack';
import type { WebpackPluginInstance } from 'webpack';
import type { BuildPaths }            from './types/config';

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
	];
}
