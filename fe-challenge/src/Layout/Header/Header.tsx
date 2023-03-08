/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [emailInfo, setEmailInfo] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        width: auto;
        height: 30px;
        border-bottom: 1px solid #000000;
        color: #2c49c9;
      `}
    >
      <h1
        css={css`
          font-size: 16px;
        `}
      >
        Wanted Pre-onboarding course
      </h1>
      <button
        css={css`
          width: 100px;
          border: 1px solid #000000;
          :hover {
            background-color: aliceblue;
          }
        `}
        onClick={() => {
          if (emailInfo) {
            localStorage.removeItem("email");
            setEmailInfo(localStorage.getItem("email"));
            navigate("/login");
          } else {
            navigate("/login");
          }
        }}
      >
        {emailInfo ? "Logout" : "login"}
      </button>
    </header>
  );
};

export default Header;
