import type { RuleSetRule } from 'webpack';

import { buildCssLoader }    from './loaders/buildCssLoader';
import type { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.tsx?$/,
		use: ['@svgr/webpack'],
	};
	
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	
	const babelLoader = {
		test: /\.(tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	};
	
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	
	const cssLoader = buildCssLoader(isDev);
	
	return [
		svgLoader,
		fileLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	];
}
