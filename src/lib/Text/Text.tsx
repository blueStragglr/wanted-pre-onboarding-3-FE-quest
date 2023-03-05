import { css } from "@emotion/react";
import { ReactNode } from "react";

export type TextType = {
	top: string;
	color: string;
};

export default function Text({
	children,
	color,
}: {
	children: ReactNode;
	color: string;
}) {
	return (
		<span
			css={css`
				font-size: 16px;
				color: ${color};
			`}
		>
			{children}
		</span>
	);
}
