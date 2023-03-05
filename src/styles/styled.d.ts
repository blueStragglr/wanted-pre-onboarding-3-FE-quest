import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSizes: {
			fs12: string;
			fs14: string;
			fs16: string;
			fs18: string;
		};
		fontWeights: {
			fw500: number;
			fw700: number;
			fw800: number;
		};
		colors: {
			red: string;
			green: string;
			primary: {
				'100': string;
				'200': string;
			};
			gray: {
				'100': string;
				'200': string;
				'300': string;
				'400': string;
			};
			white: string;
			black: string;
		};
	}
}
