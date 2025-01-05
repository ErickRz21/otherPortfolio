/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'gunmetal': '#1E252E',
				'gunmetal-bg': '#28323E',
				'wisteria': '#B4A0E5',
				'sage': '#C9C19F',
				'ecru': '#AEA36F'
			},
		},
	},
	plugins: [],
}
