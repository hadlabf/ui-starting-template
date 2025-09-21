import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		spacer: number;
		spacing: Record<Spacing, string>;
		colors: {
			background: Record<BackgroundColor, string>;
			content: Record<ContentColor, string>;
		};
		buttons: {
			background: Record<ButtonBackground, string> & {
				hover: Record<ButtonBackground, string>;
				active: Record<ButtonBackground, string>;
				focused: Record<ButtonBackground, string>;
				disabled: Record<ButtonBackground, string>;
			};
			color: Record<ButtonColor, string>;
		};
		border: {
			radius: Record<BorderRadii, string>;
			color: Record<BorderColor, string>;
		};
		fontWeights: Record<FontWeight, string>;
		fontSizes: Record<FontSize, string>;
		transitions: Record<Transition, string>;
		breakpoints: Record<Breakpoints, string>;
	}
}

export type CustomTheme = {
	spacer: number;
	spacing: Record<Spacing, string>;
	colors: {
		background: Record<BackgroundColor, string>;
		content: Record<ContentColor, string>;
	};
	buttons: {
		background: Record<ButtonBackground, string> & {
			hover: Record<ButtonBackground, string>;
			active: Record<ButtonBackground, string>;
			focused: Record<ButtonBackground, string>;
			disabled: Record<ButtonBackground, string>;
		};
		color: Record<ButtonColor, string>;
	};
	border: {
		radius: Record<BorderRadii, string>;
		color: Record<BorderColor, string>;
	};
	fontWeights: Record<FontWeight, string>;
	fontSizes: Record<FontSize, string>;
	transitions: Record<Transition, string>;
	breakpoints: Record<Breakpoints, string>;
};

// spacing
export const spacings = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const;
export type Spacing = (typeof spacings)[number];

// colors
export const contentColors = [
	"primary",
	"primaryInverted",
	"secondary",
	"tertiary",
	"tertiaryInverted",
	"positive",
	"warning",
	"negative",
] as const;
export type ContentColor = (typeof contentColors)[number];

export const backgroundColors = [
	"primary",
	"secondary",
	"tertiary",
	"primaryElevated",
	"secondaryElevated",
] as const;
export type BackgroundColor = (typeof backgroundColors)[number];

// buttons
const buttonColors = ["primary", "secondary", "tertiary", "disabled"] as const;
export type ButtonColor = (typeof buttonColors)[number];
const buttonBackgrounds = ["primary", "secondary", "tertiary"] as const;
export type ButtonBackground = (typeof buttonBackgrounds)[number];

// borders
export const borderColors = ["primary", "selected", "none"] as const;
export type BorderColor = (typeof borderColors)[number];

export const borderRadii = ["none", "xs", "sm", "lg", "xl", "full"] as const;
export type BorderRadii = (typeof borderRadii)[number];

// font
export const fontSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"] as const;
export type FontSize = (typeof fontSizes)[number];

const fontWeights = ["normal", "book", "medium", "semibold", "bold"] as const;
export type FontWeight = (typeof fontWeights)[number];

// other
export const transitions = ["smooth"] as const;
export type Transition = (typeof transitions)[number];

export const breakpoints = ["sm", "md", "lg", "xl"] as const;
export type Breakpoints = (typeof breakpoints)[number];
