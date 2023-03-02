import { useParams } from "react-router-dom"
import { Title, Wrapper } from "./style"
const Detail = () => {
  const {pageId} = useParams();
  
  return (
    <>
    <Wrapper>
      {
        pageId 
        ? <Title>{`This is Page ${pageId?.toUpperCase()}`} !</Title>
        : <Title>This is Detail Page</Title>
      }
    </Wrapper>
    </>
  )
}

export default Detail