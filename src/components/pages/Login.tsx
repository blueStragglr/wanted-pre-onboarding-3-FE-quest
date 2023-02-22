import { FormContainer, InputForm, Button, Title } from "../../styles/form";

const Login = () => {
    return (
        <FormContainer
            onSubmit={() => {
                localStorage.setItem("loggedIn", JSON.stringify("ok"));
                window.history.pushState("", "", "/");
            }}
        >
            <Title>로그인</Title>
            <InputForm>
                <label htmlFor="email">Email </label>
                <input id="email" type={"email"} required></input>
            </InputForm>
            <InputForm>
                <label htmlFor="password">Password</label>
                <input id="password" type={"password"} required minLength={8} maxLength={20}></input>
            </InputForm>
            <Button>로그인</Button>
        </FormContainer>
    );
};

export default Login;
