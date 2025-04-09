// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en:'ECNY - You need to Know',
				'zh-CN':'数字人民币必读必知',
			},
			// i18n
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},

			// 侧边栏
			sidebar: [
				{
					label: 'Getting Started',
					translations: {
						'zh-CN': '从这里开始',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Example Guide', 
							slug: 'guides/example',
							translations: {
								'zh-CN': '快速指南',
							 }
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						'zh-CN': '科普',
					},
					autogenerate: { directory: 'reference' },
				},
			],
			// 自定义样式
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/anson2dev/ecny-you-know' },
				{icon: 'discord', label: 'Discord', href:'https://diccord.com/'},
				{icon: 'x.com', label: 'X.com', href:'https://x.com/'},
				{icon: 'youtube', label: 'YouTube', href:'https://youtube.com/'},
				{icon: 'tiktok', 'label': 'TikTok', href: 'https://tiktok.com/'},
			],
		}),
	],			
});