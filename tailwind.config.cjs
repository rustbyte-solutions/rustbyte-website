/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			
			white: colors.white,
			black: colors.black,

			'text': {
				dark: '#fdfdfc',
				light: '#030302',
			},
			'background': {
				darker: '#0A0A0A',
				dark: '#0e0e0e',
				light: '#fdfdfc',
			},
			'primary': '#ace128',
			'secondary': {
				dark: '#242522',
				light: '#d7d8d5',
			},
			'accent': {
				dark: '#BBAFBB',
				light: '#3E383C',
			},
		}
	},
	plugins: []
}