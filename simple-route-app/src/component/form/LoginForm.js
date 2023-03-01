import { Form } from "react-router-dom";

const LoginForm = () => {
  return (
    <Form method="post" action="/login">
      <p>
        <label>ID : </label>
        <input type="text" name="id" />
      </p>
      <p>
        <label>PW : </label>
        <input type="password" name="pw" />
      </p>
      <input type="submit" value={"전송하기"} />
    </Form>
  );
};

export default LoginForm;
