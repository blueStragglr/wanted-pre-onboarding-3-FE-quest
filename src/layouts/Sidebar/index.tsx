import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as S from './styled';
import { sidebarList } from '../../constants/sidebarList';

const Sidebar = () => {
	const [bgColor, setBgColor] = useState('');
	const location = useLocation();
	useEffect(() => {
		const splitedPathname = location.pathname.split('/')[1];
		const filteredName = sidebarList.filter((prev) => prev.keyword === splitedPathname)[0].name;
		setBgColor(filteredName);
	}, [location]);

	return (
		<S.SidebarContainer>
			{sidebarList &&
				sidebarList.map((el) => (
					<S.SidebarContent bgColor={bgColor} selectedTab={el.name}>
						<Link to={`/${el.keyword}`} key={el.id}>
							<p>{el.name}</p>
						</Link>
					</S.SidebarContent>
				))}
		</S.SidebarContainer>
	);
};

export default Sidebar;
