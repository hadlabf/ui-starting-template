import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from "react";

export interface BaseButtonProps extends ComponentPropsWithoutRef<"button"> {
	/** Rendered element. */
	as?: ElementType;

	/** Button content. */
	children: ReactNode;

	/** Whether the button has a label or not. */
	hasIcon?: boolean;
}

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(({ ...props }, ref) => {
	return <StyledButton {...props} ref={ref} />;
});

const StyledButton = styled.button<{ hasIcon?: boolean }>`
	block-size: ${({ theme }) => 6 * theme.spacer}rem;
	border-radius: ${({ theme }) => theme.border.radius.xl};
	padding-inline: ${({ theme }) => 2 * theme.spacer}rem;
	display: flex;
	justify-content: ${({ hasIcon }) => (hasIcon ? "space-between" : "center")};
	align-items: center;

	&:hover:not(:disabled) {
		text-decoration: underline;
	}

	&:active:not(:disabled) {
		text-decoration: none;
	}

	&:focus-visible {
		outline: none;
		box-shadow: inset 0 0 0 0.0625rem ${({ theme }) => theme.border.color.selected};
		text-decoration: underline;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;
