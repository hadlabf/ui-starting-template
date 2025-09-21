import { ContentColor } from "@/lib/theme/types";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from "react";

export interface CaptionProps extends Omit<ComponentPropsWithoutRef<"p">, "color"> {
	/** Rendered element. */
	as?: ElementType;

	/** Caption content. */
	children: ReactNode;

	/** Text color of the caption. */
	color?: ContentColor;
}

export const Caption = forwardRef<HTMLParagraphElement, CaptionProps>(
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
	font-size: ${({ theme }) => theme.fontSizes.sm};
	font-weight: ${({ theme }) => theme.fontWeights.semibold};
	line-height: calc(8 / 7);
	margin-block-start: 3px;
	margin-block-end: 5px;
`;
