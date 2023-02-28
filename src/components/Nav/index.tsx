import { useSelector } from "react-redux";
import styled from "styled-components";
import {Link, useLocation, useParams} from "react-router-dom"
import { Page } from "../../store/store";
// import { Page } from "../../store/store";

const Container = styled.div`
    border-right: 1px solid;
    width: 10%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    a{
        padding-bottom: 10px;
    }
`

// #006eba;

const Nav = ()=>{
    const location = useLocation()
    const pageData = useSelector((state:any)=>state);
    
    let a = location.pathname;
    return(
        <Container>
            {
                pageData.page.map((v:Page)=>{
                    return(
                        <Link style={{
                            color:`${Number(a.slice(-1)) === v.id ? "#006eba":"black"}` 
                        }} 
                        key={v.id} to={`page/${v.id}`}
                        >
                            {v.title}
                        </Link>
                    )
                })
            }
        </Container>
    )
}

export default Nav;