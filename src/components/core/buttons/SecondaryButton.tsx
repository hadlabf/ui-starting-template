import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from "react";
import { BaseButton } from "./BaseButton";
import { Loader } from "../feedback/Loader";

export interface SecondaryButtonProps extends ComponentPropsWithoutRef<"button"> {
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

/** Button for secondary actions. */
export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
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
	background: ${({ theme }) => theme.buttons.background.secondary};
	color: ${({ theme }) => theme.buttons.color.secondary};

	&:disabled {
		background: ${({ theme }) => theme.buttons.background.disabled.secondary};
		color: ${({ theme }) => theme.buttons.color.disabled};

		[data-icon] {
			color: ${({ theme }) => theme.colors.content.tertiary};
		}
	}

	&:not(:disabled) {
		&:hover {
			text-decoration: none;
			background: ${({ theme }) => theme.buttons.background.hover.secondary};

			[data-content] {
				text-decoration: underline;
			}
		}

		&:active {
			background: ${({ theme }) => theme.buttons.background.active.secondary};

			[data-content] {
				text-decoration: none;
			}
		}

		&:focus-visible {
			background: ${({ theme }) => theme.buttons.background.focused.secondary};
		}
	}
`;
