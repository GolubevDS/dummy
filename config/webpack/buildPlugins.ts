import HtmlWebpackPlugin              from 'html-webpack-plugin';
import MiniCssExtractPlugin           from 'mini-css-extract-plugin';
import webpack, { ProgressPlugin }    from 'webpack';
import type { WebpackPluginInstance } from 'webpack';
import type { BuildOptions }          from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];
}
