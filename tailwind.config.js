/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				cascadiaCode: ["CascadiaCode", "sans-serif"],
				fontspring: ["Fontspring", "sans-serif"],
			},
			boxShadow: {
				"2xl": "7px 5px 0px 0px rgba(0,0,0,1)",
				"3xl": "6px 8px 0px 0px rgba(0,0,0,1)",
			},
			dropShadow: {
				"3xl": "4px 4px 0px rgba(0, 0, 0, 1)",
				"4xl": "-3px 3px 0px rgba(255, 255, 255, 1)",
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
		require("tailwind-scrollbar")({ nocompatible: true }),
	],
};
