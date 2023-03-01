import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Menu = styled.nav`
    width: 200px;
    height: calc(100% - 73px);
    font-size: 1.5rem;
    line-height: 250%;
    background-color: #fff;
    border-right: solid lightgray;
`

const List = styled.div`
    padding: 0 0 0 25px;
    background-color: ${props => props.actions ? "#8282FF" : "#fff"};
    color: ${props => props.actions ? "#fff" : "#000"};
`

const NavMenuComps = () => {
    const navigate = useNavigate();
    const menuList = [
        { num: 1, content: "Page A", param: ""},
        { num: 2, content: "Page B", param: "pageb"},
        { num: 3, content: "Page C", param: "pagec"}
    ];
    let actionNum = parseInt(Object.keys(menuList).find(key => menuList[key].param === window.location.pathname.slice(6))) + 1;
    const [actions, setActions] = useState(actionNum);
    
    const handleClick = (param, nums, e) => {
        setActions(nums);
        navigate(`/home/${param}`);
    }

    return(
        <Menu>
            {menuList.map(list => <List key={list.num} onClick={(e) => {handleClick(list.param, list.num, e)}} actions={list.num === actions ? true : false} >{list.content}</List>)}
        </Menu>
    )
}

export default NavMenuComps