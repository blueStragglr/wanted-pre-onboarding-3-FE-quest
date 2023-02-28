import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Wrapper from "../../components/Wrapper";
import PageText from "../../components/PageText";

function PageA() {
  return (
    <>
      <Header />
      <Wrapper>
        <Aside />
        <PageText>This is Page A!</PageText>
      </Wrapper>
    </>
  );
}

export default PageA;
