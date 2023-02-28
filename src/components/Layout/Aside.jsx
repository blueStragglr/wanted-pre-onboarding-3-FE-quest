import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Aside = () => {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(active);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  function handleNavigate(e) {
    const value = e.target.textContent.toLowerCase();
    if (value === "main") {
      navigate(`/`);
    } else navigate(`/${value}`);
  }

  return (
    <Container>
      <ul>
        <li onClick={(e) => handleNavigate(e)}>Main</li>
        <li onClick={(e) => handleNavigate(e)}>About</li>
        <li onClick={(e) => handleNavigate(e)}>Login</li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 100%;
  background-color: var(--color-point);
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    flex-wrap: wrap;
    padding-top: 20px;
    li {
      width: 80%;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 15px 0;
      border-bottom: 1px solid var(--color-primary);
      color: var(--color-point-dark);
    }
  }
`;

export default Aside;
