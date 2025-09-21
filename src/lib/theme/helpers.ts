import { Theme } from "node_modules/@emotion/react/dist/declarations/src";
import { BackgroundColor, borderRadii, ContentColor, fontSizes, spacings } from "./types";
import { spacingBase } from "./theme";
import { BorderRadius, FontSize, Gap, SpacingInput } from "./props";

export const isInArray = <T, U extends T>(item: T, array: ReadonlyArray<U>): item is U => {
	return array.includes(item as U);
};

export const getColor = (color: ContentColor, theme: Theme): string => {
	return theme.colors.content[color];
};

export const getBackground = (background: BackgroundColor, theme: Theme): string => {
	return theme.colors.background[background];
};

export const getBorderRadius = (borderRadius: BorderRadius, theme: Theme): string => {
	if (typeof borderRadius === "number") return `${borderRadius * spacingBase}rem`;
	if (isInArray(borderRadius, borderRadii)) return theme.border.radius[borderRadius];
	return borderRadius.toString();
};

export const getFontSize = (fontSize: FontSize, theme: Theme): string => {
	if (typeof fontSize === "number") return `${fontSize}rem`;
	if (isInArray(fontSize, fontSizes)) return theme.fontSizes[fontSize];
	return fontSize.toString();
};

export const getGap = (gap: Gap, theme: Theme): string => {
	if (gap === "none") return "0px";
	return getSpacing(gap, theme);
};
export const getSpacing = (input: SpacingInput, theme: Theme): string => {
	if (typeof input === "number") return `${input * spacingBase}rem`;
	if (isInArray(input, spacings)) return theme.spacing[input];
	return input.toString();
};
