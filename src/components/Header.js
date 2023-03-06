import styled from '@emotion/styled'

const HeaderBox = styled.div`
    display : flex;
    justify-content: lift;
    align-items: center;
    background-color: black;
    color : white;
    font-size: 24px;
    padding: 20px;
    width : 100%
    height : 80px;
`

function Header(){

    return(
        <HeaderBox>
            Wanted Pre-onboarding course
        </HeaderBox>
    );


}
export default Header;



