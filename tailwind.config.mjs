/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
				sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [typography],
}
