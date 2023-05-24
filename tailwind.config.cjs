/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", ...defaultTheme.fontFamily.sans],
			}
		},
		animation: {
			text: 'text 1s ease infinite',
		  },
		  keyframes: {
			text: {
			  '0%, 100%': {
				'background-size': '200% 200%',
				'background-position': 'left center',
			  },
			  '50%': {
				'background-size': '200% 200%',
				'background-position': 'right center',
			  },
			},
		  },
	},
	plugins: [],
}
