/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"3xl": "1920px",
			},
			fontFamily: {},
			colors: {
				basicBackGround: "#F5F5F5",
				buttonColor: "#2C7FFF",
				lightGrey: "#7A7A7A",
				grey: "#B4B4B4",
				disableColor: "#E8E8E8",
			},
		},
	},
	plugins: [],
};
