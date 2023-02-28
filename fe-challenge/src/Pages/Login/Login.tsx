/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Login = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        margin: auto;
        border: 1px solid #000000;
        border-radius: 20%;
      `}
    >
      <h1>LOGIN</h1>
      <form
        css={css`
          display: flex;
          flex-direction: column;
          gap: 30px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 5px;
          `}
        >
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="email" />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 5px;
          `}
        >
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
};

export default Login;
