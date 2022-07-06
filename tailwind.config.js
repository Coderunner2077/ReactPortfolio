const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}', './index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
				sky: colors.sky,
				cyan: colors.cyan
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
			font: {
				"arial": "Arial Bold, Arial"
			},
			zIndex: {
				"auto": "auto",
				"-1": -1,
				"40": 40,
				'100': 100,
				"200": 200,
				'1040': 1040,
				'1050': 1050,
			},
			keyFrames: {
				"alert-in": {
					"0%": { opacity: 0, transform: "translateY(-15px)" },
					"12%": { opacity: 0.9, transform: "translateY(0)" },
					"88%": { opacity: 0.9, transform: "translateY(0)" },
					"100%": { opacity: 0, transform: "translateY(-15px)" }
				},
				"alert-out": {
					"0%": { opacity: 1, transform: "translateY(0)" },
					//"12%": { opacity: 1, transform: "translateY(0)" },
					"88%": { opacity: 1, transform: "translateY(0)" },
					"100%": { opacity: 0, transform: "translateY(-15px)" }
				},
			},
			animation: {
				"alert-in": "alert-in 3s ease-out",
				"alert-out": "alert-out 3s ease-out"
			},
			transformOrigin: {
				"0": "0%",
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
		borderColor: ["responsive", "hover", "focus", "focus-within"]
	},
	plugins: ['@tailwindcss/forms'],
};
