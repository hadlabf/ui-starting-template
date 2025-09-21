import { CustomTheme } from "./types";

export const spacingBase: number = 0.5;

export const theme: CustomTheme = {
	spacer: spacingBase,
	colors: {
		background: {
			primary: "#e3e3e3",
			primaryElevated: "#d8d6d6",
			secondary: "#1E1E1F0C",
			secondaryElevated: "#F5F5F5",
			tertiary: "#1E1E1F17",
		},
		content: {
			primary: "#1E1E1F",
			primaryInverted: "#E3E2DC",
			secondary: "#1E1E1F99",
			tertiary: "#F98F01",
			tertiaryInverted: "#F9F0BB",
			positive: "#0D9D01",
			negative: "#ED0707",
			warning: "#FE7D05",
		},
	},
	border: {
		radius: {
			none: "0",
			xs: "0.25rem",
			sm: "0.5rem",
			lg: "1rem",
			xl: "1.5rem",
			full: "9999px",
		},
		color: {
			primary: "#DADADA",
			selected: "#121212",
			none: "none",
		},
	},
	transitions: {
		smooth: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
	},
	spacing: {
		xs: "0.25rem",
		sm: "0.5rem",
		md: "1rem",
		lg: "1.5rem",
		xl: "2rem",
		"2xl": "3rem",
		"3xl": "4rem",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
	},
	fontWeights: {
		normal: "400",
		book: "450",
		medium: "500",
		semibold: "600",
		bold: "700",
	},
	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
	},
	buttons: {
		background: {
			primary: "#121212",
			secondary: "#F5F5F5",
			tertiary: "#FFFFFF",
			hover: {
				primary: "#d8d6d6",
				secondary: "#EBEBEB",
				tertiary: "#EBEBEB",
			},
			active: {
				primary: "#121212",
				secondary: "#F5F5F5",
				tertiary: "#FFFFFF",
			},
			focused: {
				primary: "#1E1E1F",
				secondary: "#EBEBEB",
				tertiary: "#EBEBEB",
			},
			disabled: {
				primary: "#F5F5F5",
				secondary: "#F5F5F5",
				tertiary: "#FFFFFF",
			},
		},
		color: {
			primary: "#FFFFFF",
			secondary: "#1E1E1F",
			tertiary: "#1E1E1F",
			disabled: `${"#1E1E1F"}66`, // 66 is HEX for ~40% opacity
		},
	},
};

export type Theme = typeof theme;
