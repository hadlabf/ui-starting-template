import { ContentColor } from "@/lib/theme/types";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	/** Rendered element. */
	as?: ElementType;

	/** Paragraph content. */
	children: ReactNode;

	/** Text color of the paragraph. */
	color?: ContentColor;
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
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

const StyledText = styled("p", {
	shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color", // avoid passing `color` attribute to HTML element
})<StyledTextProps>`
	color: ${({ color, theme }) => color && theme.colors.content[color]};
	font-family: font-family: "Roboto", sans-serif;
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: ${({ theme }) => theme.fontWeights.book};
	line-height: calc(4 / 3);
	margin-block-start: 5px;
	margin-block-end: 3px;
`;
