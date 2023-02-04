import path                          from 'node:path';
import { buildWebpackConfig }        from './config/webpack/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/webpack/types/config';


export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const PORT = env.port || 3000;
	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});
}
