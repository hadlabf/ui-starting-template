import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from "react";
import { Link } from "./Link";
import { ContentColor } from "@/lib/theme/types";

export interface LinkButtonProps extends ComponentPropsWithoutRef<"button"> {
	/** Rendered element. */
	as?: ElementType;

	/** Content of the link. */
	children: ReactNode;

	/** Color used in the link. */
	color?: Color;
}

/** Sometimes, you want a button to behave like a link—i.e. navigate to another URL on click. Use `<LinkButton>` for those cases to make that possible while keeping correct semantics. */
export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<Link as="button" {...props} ref={ref}>
				{children}
			</Link>
		);
	}
);

type Color = Extract<ContentColor, "primary" | "secondary">;
