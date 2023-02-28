import Aside from "../../components/Aside";
import Header from "../../components/Header";
import PageText from "../../components/PageText";
import Wrapper from "../../components/Wrapper";

function PageB() {
  return (
    <>
      <Header />
      <Wrapper>
        <Aside />
        <PageText>This is Page B!</PageText>
      </Wrapper>
    </>
  );
}

export default PageB;
