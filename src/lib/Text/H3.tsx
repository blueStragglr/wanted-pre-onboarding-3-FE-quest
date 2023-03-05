import { css } from "@emotion/react";
import { ReactNode } from "react";

export type TextType = {
	top: string;
};

export default function H3({ children }: { children: ReactNode }) {
	return (
		<span
			css={css`
				font-size: 20px;
			`}
		>
			{children}
		</span>
	);
}
