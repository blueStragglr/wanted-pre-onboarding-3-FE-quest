import { useLogin } from "@/hooks/useLogin";
import styled from "styled-components";

export const Login = () => {
    const { register, handleSubmit, onSubmit } = useLogin();
    return (
        <StyledSection>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledTitle>로그인화면</StyledTitle>
                <StyledInput type='text' placeholder='ID' {...register("email", { required: true })} />
                <StyledInput type='password' placeholder='PWD' {...register("password", { required: true })} />
                <StyledButton>로그인</StyledButton>
            </StyledForm>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 350px;
    border-radius: 10px;
    padding: 20px;

    background-color: white;
`;

const StyledTitle = styled.h2`
    margin-bottom: 30px;
`;

const StyledForm = styled.form`
    margin-top: 30px;
    width: 100%;
    text-align: center;
    > input {
        margin-bottom: 15px;
    }
`;

const StyledInput = styled.input`
    width: 320px;
    height: 40px;
    line-height: 40px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #f7f8f9;
`;

const StyledButton = styled.button`
    width: 320px;
    height: 50px;
    font-weight: bold;
    margin-top: 20px;
    border: none;
    color: white;
    background-color: #8424db;
    cursor: pointer;
`;
