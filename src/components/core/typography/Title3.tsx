import { ContentColor } from "@/lib/theme/types";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";

export interface Title3Props extends HTMLAttributes<HTMLHeadingElement> {
	/** Rendered element. */
	as?: ElementType;

	/** Title content. */
	children: ReactNode;

	/** Text color of the title. */
	color?: ContentColor;
}

export const Title3 = forwardRef<HTMLHeadingElement, Title3Props>(
	({ children, color, ...props }, ref) => {
		return (
			<StyledText color={color} {...props} ref={ref}>
				{children}
			</StyledText>
		);
	}
);

interface StyledTextProps {
	color: ContentColor | undefined;
}

const StyledText = styled("h3", {
	shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color", // avoid passing `color` attribute to HTML element
})<StyledTextProps>`
  color: ${({ color, theme }) => color && theme.colors.content[color]};
	font-family: font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: calc(4 / 3);
  margin-block-start: 7px;
  margin-block-end: 1px;
`;
