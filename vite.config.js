import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron/simple';
import pkg from './package.json';

export default defineConfig(({ command }) => {
	const isBuild = command === 'build';
	
	return {
		resolve: {
			alias: {
				"@iv": "/src",
				"@api": "/electron/database/api",
			}
		},
		plugins: [
			react(),
			electron({
				main: {
					entry: 'electron/main.ts',
					vite: {
						build: {
							minify: isBuild,
							outDir: 'dist',
							rollupOptions: {
								external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
							}
						}
					}
				},
				preload: {
					input: 'electron/preload.ts',
					vite: {
						build: {
							minify: isBuild,
							outDir: 'dist',
							rollupOptions: {
								external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
							}
						}
					}
				}
			}),
		]
	};
});