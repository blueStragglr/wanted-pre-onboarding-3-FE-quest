import { Link } from "react-router-dom"
import styled from "styled-components"

const OptionsContainer =styled.div`
display:flex;

`
const Option = styled.div`
    margin-right : 5px;
`


function LoginOptions () {

    return<>
    <OptionsContainer>
        <Option><Link to={{pathname : `/login`}}>
        login</Link></Option>
        <Option><Link to={{pathname : `/Jwtlogin`}}>
        Jwtlogin</Link></Option>
        <Option><Link to={{pathname : `/localLogin`}}>
        localstorage login</Link></Option>
    </OptionsContainer>
    </>
}

export default LoginOptions