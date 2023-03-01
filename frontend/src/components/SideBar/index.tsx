import { useNavigate, useParams } from "react-router-dom"
import { Wrapper, Item, Line } from "./style"

const SideBar = () => {
    const navigate = useNavigate();
    const handlePage = (currPage:string) => {
        navigate(`/page/${currPage}`)
    }
    const sideBarItem = ['a', 'b', 'c']

    const {pageId} = useParams();

  return (
    <>
    <Wrapper>   
        {sideBarItem.map(item => (
            <Item 
            key = {sideBarItem.lastIndexOf(item)}
            onClick = {() => handlePage(item)}
            isActive = {pageId === item}
            >
                {`page ${item.toUpperCase()}`}
            </Item>
        ))}
    </Wrapper>
    <Line />
    </>
  )
}

export default SideBar