import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface IPageContext {
    pageId: string;
}

function Page() {
    const { pageId } = useOutletContext<IPageContext>();
  return <Wrapper>This is Page {pageId}!</Wrapper>;
}

export default Page;
