import "./App.css";
import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  return <Head>Wanted Pre-Onboarding Course</Head>;
};

const List = ({ pages, onChange }) => {
  return (
    <Wrapper>
      {pages.map((page, idx) => {
        return (
          <li key={idx}>
            <a
              href={`/${idx + 1}`}
              onClick={(e) => {
                e.preventDefault();
                onChange(idx);
              }}
            >
              {page}
            </a>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Content = ({ content }) => {
  return <div>{content}</div>;
};

function App() {
  const [id, setId] = useState("");
  const pages = ["Page1", "Page2", "Page3"];

  const changeHandler = (idx) => {
    setId(Number(idx));
  };

  let content = null;

  if (id === "") {
    content = "Hi";
  } else {
    content = `This page is ${pages[id]}!`;
  }
  return (
    <div>
      <Header />
      <Main>
        <List pages={pages} onChange={changeHandler} />
        <Content content={content} />
      </Main>
    </div>
  );
}

export default App;

const Wrapper = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 20%;
  height: 100%;
  color: black;
  > li {
    padding: 15px;
    > a {
      color: black;
      text-decoration: none;
      :hover {
        color: blue;
      }
    }
  }
`;

const Head = styled.div`
  padding: 30px;
  font-size: 20px;
  font-style: italic;
  font-weight: 800;
  border-bottom: 1px solid black;
`;

const Main = styled.div`
  display: flex;
  height: 600px;

  > div {
    text-align: center;
    width: 80%;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 600px;
    border-left: 1px solid black;
  }
`;
