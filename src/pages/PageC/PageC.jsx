import Aside from "../../components/Aside";
import Header from "../../components/Header";
import PageText from "../../components/PageText";
import Wrapper from "../../components/Wrapper";

function PageC() {
  return (
    <>
      <Header />
      <Wrapper>
        <Aside />
        <PageText>This is Page C!</PageText>
      </Wrapper>
    </>
  );
}

export default PageC;
