import type { Configuration as DevConfiguration } from 'webpack-dev-server';
import type { BuildOptions }                      from './types/config';

export function buildDevServer({ port }: BuildOptions): DevConfiguration {
	return {
		open: true,
		port,
		historyApiFallback: true,
	};
}
