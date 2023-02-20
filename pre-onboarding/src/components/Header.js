import { useNavigate } from "react-router";
import styled from "styled-components";

const HeaderDiv = styled.div`
  border-bottom: solid black;
  position: fixed;
  margin: 0;
  top: 0;
  width: 100%;
  height: 10vh;
  background-color: white;
`;

const MainButton = styled.div`
    font-size: 4vh;
    margin-top: 2.5vh;
`;

function Header() {
    const navigator = useNavigate();
    const onMain = () => {
        navigator(`/`);
    }

    return (
        <HeaderDiv>
            <MainButton
                onClick={onMain}
            >
                Wanted Pre-onboarding course
            </MainButton>
        </HeaderDiv>
    );
  }
  
  export default Header;
  