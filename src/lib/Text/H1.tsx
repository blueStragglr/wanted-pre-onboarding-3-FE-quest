import { css } from "@emotion/react";
import { ReactNode } from "react";

export type TextType = {
	top: string;
};

export default function H1({ children }: { children: ReactNode }) {
	return (
		<span
			css={css`
				font-size: 32px;
			`}
		>
			{children}
		</span>
	);
}
