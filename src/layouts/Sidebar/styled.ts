import styled from 'styled-components';

export const SidebarContainer = styled.header`
	width: 100px;
	height: 100%;
	border-right: 1px solid #ddd;
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	a {
	}
`;

export const SidebarContent = styled.div<{ bgColor: string; selectedTab: string }>`
	a {
		color: black;
		text-decoration-line: none;

		p {
			margin: 1rem 0;
			color: ${({ bgColor, selectedTab }) => (bgColor === selectedTab ? 'blueviolet' : 'black')};
		}
	}
`;
