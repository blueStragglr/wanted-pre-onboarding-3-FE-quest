import { Link } from "react-router-dom";
import * as S from "./style";

const Sidebar = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <S.Content>Page A</S.Content>
      </Link>
      <Link to="/b">
        <S.Content>Page B</S.Content>
      </Link>
      <Link to="/c">
        <S.Content>Page C</S.Content>
      </Link>
    </S.Wrapper>
  );
};

export default Sidebar;
