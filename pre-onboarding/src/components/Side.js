import { useNavigate } from "react-router";
import styled from "styled-components";

const SideDiv = styled.div`
    border-right: solid black;
    position: fixed;
    margin-top: 10vh;
    width: 15vh;
    height: 100vh;
`;
const Buttons = styled.div`
    height: 100%;
`;

const Button = styled.div`
    margin: 20%;
    text-align: center;
`;

function Side() {
    const navigator = useNavigate();

    const pages = ["Page A", "Page B", "Page C"];
    const onPage = (i) => {
        navigator("/" + i.slice(-1));
    }
    return (
        <SideDiv>
            <Buttons>
                {pages.map((i) => (
                    <Button
                        key={i}
                        onClick={() => { onPage(i) }}
                    >
                        {i}
                    </Button>
                ))}
            </Buttons>
        </SideDiv>
    );
  }
  
  export default Side;
  