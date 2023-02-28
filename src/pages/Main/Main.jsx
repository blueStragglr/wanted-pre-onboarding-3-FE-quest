import Aside from "../../components/Aside";
import Header from "../../components/Header";
import PageText from "../../components/PageText";
import Wrapper from "../../components/Wrapper";

function Main() {
  return (
    <>
      <Header />
      <Wrapper>
        <Aside />
        <PageText>This is Main Page.</PageText>
      </Wrapper>
    </>
  );
}

export default Main;
