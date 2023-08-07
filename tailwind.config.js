/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: '#a0c3df',
					secondary: '#26567b',
					accent: '#c72329',
					info: '#59B7FF',
					neutral: '#3d4451',
					'base-100': '#FCFBF7',
					'base-200': '#f4f1ec'
				},
				dark: {
					primary: '#1B74E0',
					secondary: '#1457A8',
					accent: '#A81212',
					neutral: '#2a323c',
					'base-100': '#1d232a',
					'base-200': '#191e24',
					info: '#1D7EA8'
				}
			}
		],
		darkTheme: 'dark'
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
