import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from "react";
import { BaseButton } from "./BaseButton";
import { Loader } from "../feedback/Loader";

export interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
	/** Rendered element. */
	as?: ElementType;

	/** Content of the button. */
	children: ReactNode;

	/** Makes the button disabled. */
	disabled?: boolean;

	/** Adds a loading spinner to the button. */
	isLoading?: boolean;

	/** Sets the button to full width. */
	isFullWidth?: boolean;
}

/** Button for primary actions. */
export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
	({ children, isLoading = false, isFullWidth = false, ...props }, ref) => {
		return (
			<StyledBaseButton isFullWidth={isFullWidth} {...props} ref={ref}>
				<span data-content>{children}</span>
				{isLoading && <Loader />}
			</StyledBaseButton>
		);
	}
);

interface StyledBaseButtonProps {
	isFullWidth: boolean;
}

const StyledBaseButton = styled(BaseButton)<StyledBaseButtonProps>`
	${({ isFullWidth }) => isFullWidth && "inline-size: 100%;"}
	background: ${({ theme }) => theme.colors.background.primary};
	color: ${({ theme }) => theme.colors.content.primary};

	&:disabled {
		background: ${({ theme }) => theme.buttons.background.disabled.primary};
		color: ${({ theme }) => theme.buttons.color.disabled};
	}

	&:not(:disabled) {
		&:hover {
			text-decoration: none;
			background: ${({ theme }) => theme.buttons.background.hover.primary};

			[data-content] {
				text-decoration: underline;
			}
		}

		&:active {
			background: ${({ theme }) => theme.buttons.background.active.primary};

			[data-content] {
				text-decoration: none;
			}
		}

		&:focus-visible {
			background: ${({ theme }) => theme.buttons.background.focused.primary};
		}
	}
`;
