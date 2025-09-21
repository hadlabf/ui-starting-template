import { getColor } from "@/lib/theme/helpers";
import { ContentColor, CustomTheme } from "@/lib/theme/types";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type LinkProps<C extends ElementType> = {
	/** Rendered element. */
	as?: C;

	/** Link content. */
	children: ReactNode;

	/** Text color of the link. */
	color?: Extract<ContentColor, "primary" | "secondary">;
} & ComponentPropsWithoutRef<C>;

export const Link = <C extends ElementType>({
	children,
	color,
	...props
}: LinkProps<C>): React.JSX.Element => {
	return (
		<StyledAnchor textColor={color} {...props}>
			{children}
		</StyledAnchor>
	);
};

interface StyledAnchorProps {
	textColor: Extract<ContentColor, "primary" | "secondary"> | undefined;
}

const StyledAnchor = styled("a", {
	shouldForwardProp: (prop) => isPropValid(prop) && prop !== "textColor", // avoid passing `textColor` attribute to HTML element
})<StyledAnchorProps>`
  color: ${({ textColor, theme }) => textColor && getColor(textColor, theme)};
  font-family: font-family: "Roboto", sans-serif;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  text-decoration: underline;

  &:hover {
    color: ${({ textColor, theme }) => getHoverColor(textColor, theme)};
    text-decoration: none;
  }

  &:active {
    text-decoration: underline;
  }
`;

const getHoverColor = (color: ContentColor | undefined, theme: CustomTheme): string => {
	switch (color) {
		case "primary":
			return theme.colors.content.secondary;
		case "secondary":
			return theme.colors.content.primary;
		default:
			return theme.colors.content.secondary;
	}
};
