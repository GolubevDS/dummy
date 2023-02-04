import type { Configuration as DevConfiguration } from 'webpack-dev-server';

export function buildDevServer(port: number): DevConfiguration {
	return {
		open: true,
		port,
		historyApiFallback: true
	};
}
