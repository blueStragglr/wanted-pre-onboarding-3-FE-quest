import { StyledSideBar } from "./styled";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate()

    const link = [
        {label:"Page A", router:"/"},
        {label:"Page B", router:"/b"},
        {label:"Page C", router:"/c"},
    ]

    const handleRouting = (link) => {
        navigate(link)
    }

    return(
        <StyledSideBar>
            {link.map((list, i) => <li key={i} onClick={() => handleRouting(list.router)}>{list.label}</li>)}
        </StyledSideBar>
    )
}

export default SideBar;