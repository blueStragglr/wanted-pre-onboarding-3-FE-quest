import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";

const Text = styled.span`
    color:#006eba;
`

const Page = ()=>{
    const {id} = useParams();
    const pageData = useSelector((state:any)=>state);

    const pageId = pageData.page.find((v:any)=>{
        return(
            v.id === Number(id)
        )
    })
    const logInValue = true; //로그인 유무

    return(
        <>
            {logInValue ? <Text>This is {pageId.title}!</Text> : null}
            
        </>
    )
}

export default Page;