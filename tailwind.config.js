/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				highlightGrey: '#686F79'
			}
		}
	},
	plugins: []
}
