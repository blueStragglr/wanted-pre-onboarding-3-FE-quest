import GnbItem from "./GnbItem";
import styled from "styled-components";

const GnbContainer = styled.div`
  width: 200px;
`;

const Gnb = () => {
  return (
    <GnbContainer>
      <GnbItem path={"/page1"} label="페이지1" />
      <GnbItem path={"/page2"} label="페이지2" />
      <GnbItem path={"/page3"} label="페이지3" />
    </GnbContainer>
  );
};

export default Gnb;
