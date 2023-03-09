import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Main } from "../components/styles";

export const PageC = () => {
  return (
    <>
      <Header />
      <Main>
        <Nav />
        <div>This is PageC!</div>
      </Main>
    </>
  );
};
