import remarkGfm from 'remark-gfm';
import { mergeConfig } from 'vite';

const config = {
	stories: [
		'../stories/intro.mdx',
		'../stories/design-system.mdx',
		'../stories/*.mdx',
		'../stories/**/*.mdx',
		'../stories/*.stories.tsx',
		'../stories/**/*.stories.tsx',
	],
	addons: [
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		'@storybook/addon-themes',
		'@storybook/addon-designs',
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				...config.resolve,
				alias: config.resolve?.alias ?? [],
			},
		});
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
};

export default config;
