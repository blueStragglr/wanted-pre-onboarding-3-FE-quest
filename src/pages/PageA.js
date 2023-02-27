import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
	height: calc(100vh - 76.5px);
	display: flex;
	flex-direction: row;
`;

const Content = styled.article`
	width: 100%;
	height: 100%;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		color: #74b9ff;
	}
`;

function PageA() {
	return (
		<>
			<Nav />
			<Container>
				<Sidebar />
				<Content>
					<h1>This is Page A!</h1>
				</Content>
			</Container>
		</>
	);
}
export default PageA;
