import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import { pageState } from "../../util/state/atom";
import AddPage from "../AddPage";
import { Wrapper, Item, Line } from "./style"

const SideBar = () => {
    const defaultPages = ['a', 'b', 'c']
    const navigate = useNavigate();
    const [pages, setPages] = useRecoilState(pageState)
    const handlePage = (currPage:string):void => {
        navigate(`/page/${currPage}`)
    }
    const deletePage = (index:number):void => {
        if(window.confirm('이 페이지를 삭제 하겠습니까?')){
            setPages((prevPages) => {
                const copyPrev = [...prevPages]
                copyPrev.splice(index, 1)
                return copyPrev
            })
        }
    }
    const {pageId} = useParams();

  return (
    <>
    <Wrapper>   
        <AddPage />
        {pages.map((item, index)=> (
            <Item 
            key = {index}
            onClick = {() => handlePage(item)}
            isActive = {pageId === item}>
                <span>{`page ${item.toUpperCase()}`}</span>
                {defaultPages.indexOf(item) === -1 
                ? <span onClick={() => deletePage(index)}>❌</span>
                : null}
            </Item>))}
    </Wrapper>
    <Line />
    </>
  )
}

export default SideBar