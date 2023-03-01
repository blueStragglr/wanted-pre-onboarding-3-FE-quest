import styled from "styled-components";

const HeadBox = styled.div`
  height: 59px;
  border-bottom: 2px solid black;
`;

const HeadText = styled.h2`
  margin-left: 30px;
  text-align: left;
`;
const Header = () => {
  return (
    <>
      <HeadBox>
        <HeadText>Wanted Pre-onboarding course</HeadText>
      </HeadBox>
    </>
  );
};

export default Header;
