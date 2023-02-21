import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import db from 'db/data.json';
import { IData } from 'types/data';

function SidebarContent() {
  const a = useLocation().pathname.replace('/', '');
  console.log(a);
  return (
    <Container>
      {db.contents.map((data: IData) => (
        <Link
          style={{ textDecoration: 'none', color: `${a === data.content ? '#356eb7' : 'black'}` }}
          to={`/${data.content}`}
        >
          {`Page ${data.content}`}
        </Link>
      ))}
    </Container>
  );
}

export default SidebarContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 35px;
  margin-top: 30px;
  margin-left: 40px;
  gap: 40px;
`;
