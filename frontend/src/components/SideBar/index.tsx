import { useNavigate, useParams } from "react-router-dom"
import { getSidebarItem } from "../../Router";
import AddPage from "../AddPage";
import { Wrapper, Item, Line } from "./style"

interface ISidebarItem{
    path:string;
    element:React.ReactNode;
    label:string;
}

const SideBar = () => {
    const navigate = useNavigate();
    const handlePage = (currPage:string):void => {
        navigate(`/page/${currPage}`)
    }
    const {pageId} = useParams();

  return (
    <>
    <Wrapper>   
        <AddPage />
        {
            getSidebarItem.map((item:ISidebarItem, index:number) => (
                <Item 
                key={index}
                onClick={()=>handlePage(item.label)}
                isActive={pageId === item.label}>
                    <span>{`page ${item.label.toUpperCase()}`}</span>
                </Item>
            ))
        }
    </Wrapper>
    <Line />
    </>
  )
}

export default SideBar