import { css } from "@emotion/react";

import { ReactNode } from "react";
import { Header } from "./Header";

export default function PageLayout({ children }: { children: ReactNode }) {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin: 0 auto;
			`}
		>
			<Header />
			<div
				css={css`
					width: 100%;
					padding: 0;
					margin: 0 auto;
					height: auto;
					display: flex;
					justify-content: center;
					padding-top: 20px;
				`}
			>
				<div
					css={css`
						background: "white";
						min-width: 700px;
					`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
