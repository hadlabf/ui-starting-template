import styled from "@emotion/styled";
import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from "react";
import { ContentColor } from "@/lib/theme/types";
import { getColor } from "@/lib/theme/helpers";

export interface IconProps extends ComponentPropsWithoutRef<"span"> {
	/** Rendered element. */
	as?: ElementType;

	/** Color of the icon. */
	color?: ContentColor;

	/** Icon to show. */
	name: IconName;
}

// use for example https://mothereff.in/html-entities to convert figma icons to html entities

/** Render icons as text. */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ name, color, ...props }, ref) => {
	return (
		<StyledSpan aria-hidden="true" textColor={color} {...props} ref={ref}>
			{getEncodedEntity(name)}
		</StyledSpan>
	);
});

interface StyledSpanProps {
	textColor: ContentColor | undefined;
}

const StyledSpan = styled.span<StyledSpanProps>`
	color: ${({ textColor, theme }) => textColor && getColor(textColor, theme)};
`;

export const iconNames = [
	"checkmark",
	"warning",
	"plus",
	"minus",
	"ellipsis",
	"xMark",
	"chevronDown",
	"chevronUp",
	"chevronRight",
	"chevronLeft",
	"arrowRight",
	"arrowLeft",
] as const;

export type IconName = (typeof iconNames)[number];

const getEncodedEntity = (name: IconName): ReactNode => {
	switch (name) {
		case "plus":
			return <>&#x10017C;</>;
		case "minus":
			return <>&#x10017D;</>;
		case "checkmark":
			return <>&#10003;</>;
		case "warning":
			return <>&#1049087;</>;
		case "chevronDown":
			return <>&#8964;</>;
		case "chevronUp":
			return <>&#8963;</>;
		case "chevronRight":
			return <>&#707;</>;
		case "chevronLeft":
			return <>&#706;</>;
		case "xMark":
			return <>&#1048964;</>;
		case "arrowRight":
			return <>&#8594;</>;
		case "arrowLeft":
			return <>&#8592;</>;
		default:
			return null;
	}
};
