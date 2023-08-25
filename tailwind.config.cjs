/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				home: "url('/bg.jpg')",
			},
			colors: {
				primary: '#009A49',
				'primary-hover': '#00803C',
				'primary-light': '#00E66B',
			},
		},
	},
	plugins: [],
};
