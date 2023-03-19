/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#f5f5dc",

					secondary: "#927C66",

					accent: "#ffffff",

					neutral: "#191D24",

					"base-100": "#2A303C",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
	},
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
