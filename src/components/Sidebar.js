import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100%;
	border-right: 1px solid #b2bec3;
	a {
		text-decoration-line: none;
	}
`;

const Ul = styled.ul`
	list-style: none;
	padding-top: 30px;
	padding-left: 40px;
`;

const Menu = styled.li`
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	transition: 0.3s;
	padding-bottom: 20px;
	&:hover {
		color: #74b9ff;
		transition: 0.3s;
	}
	a {
		color: #2d3436;
	}
	.active {
		color: #74b9ff;
	}
`;

function Sidebar() {
	const link = [
		{title: 'Page A', link: '/pageA'},
		{title: 'Page B', link: '/pageB'},
		{title: 'Page C', link: '/pageC'},
	];

	return (
		<SidebarContainer>
			<Ul>
				{link.map((list, idx) => (
					<Menu key={idx}>
						<NavLink to={list.link} activeclassname="active">
							{list.title}
						</NavLink>
					</Menu>
				))}
			</Ul>
		</SidebarContainer>
	);
}
export default Sidebar;
