import { PropsWithChildren } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import * as S from './styled';

const Layout = (props: PropsWithChildren) => {
	return (
		<S.Container>
			<Header />
			<S.LayoutInner>
				<Sidebar />
				<S.PageContent className="contentDiv">{props.children}</S.PageContent>
			</S.LayoutInner>
		</S.Container>
	);
};

export default Layout;
