import { useParams } from "react-router-dom"
import { Title, Wrapper } from "./style"
const Detail = () => {
  const {pageId} = useParams();
  
  return (
    <>
    {
      pageId 
      ? <Wrapper>
          <Title>{`This is Page ${pageId?.toUpperCase()}`} !</Title>
        </Wrapper>
      : null
    }
    </>
  )
}

export default Detail