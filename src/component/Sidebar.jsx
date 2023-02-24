import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SideBar = styled.div`
    width:200px;
    padding:10px;
    min-height:calc(100vh - 71px);
    border-right:solid 1px lightgrey;
    font-weight:bold;
`

const Ul = styled.ul`
    list-style: none;
    padding-left:0;
    margin-top:0;
`

const Li = styled.li`
    cursor:pointer;
    margin-bottom:20px;
`

function Sidebar() {

    const navigate = useNavigate();
    const [color, setColor] = useState("1");

    useEffect(() => {
        const pages = ["1", "2", "3"];
        const noPages = pages.filter((item) => item !== color);
        document.getElementById(color).style.color = "lightblue";
        noPages.map((item) => {
            document.getElementById(item).style.color = "grey";
            return null;
        });
    }, [color]);

    function onPage1(e) {
        navigate('/');
        setColor(e.target.id);
    }
    function onPage2(e) {
        navigate('/2');
        setColor(e.target.id);
    }
    function onPage3(e) {
        navigate('/3');
        setColor(e.target.id);
    }

    return (
        <SideBar>
            <Ul>
                <Li onClick={onPage1} id={"1"}>Page 1</Li>
                <Li onClick={onPage2} id={"2"}>Page 2</Li>
                <Li onClick={onPage3} id={"3"}>Page 3</Li>
            </Ul>
        </SideBar>
    );
}

export default Sidebar;