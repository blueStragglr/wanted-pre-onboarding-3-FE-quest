import styled from "styled-components";

const OutLine = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SmallCardSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5a81dbcc;
  border-radius: 15px;
  width: 25vw;
  height: 40vh;
`;

const SmallCard = (props) => {
  return (
    <OutLine>
      <SmallCardSt>{props.children}</SmallCardSt>
    </OutLine>
  );
};
export default SmallCard;
