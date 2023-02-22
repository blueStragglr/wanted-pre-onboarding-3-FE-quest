import styled from "styled-components";

const FormContainer = styled("form")`
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    & + & {
        margin-top: 4px;
    }
`;
const Title = styled("div")`
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 700;
`;
const InputForm = styled("div")`
    position: relative;
    width: 250px;
    > input {
        width: 100%;
        height: 48px;
        margin: 10px 0;
        border: 0.3px solid black;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0 5px;
        outline: none;
        padding-left: 15px;

        &:invalid {
            outline: 2px solid red;
        }
    }
    > label {
        position: absolute;
        top: -1.8em;
        left: 0;
        margin: 1.9em 2em 2em 1em;
        background-color: white;
        padding: 0 8px;
        color: black;
    }
`;

const Button = styled("button")`
    width: 250px;
    height: 39px;
    border: 1px solid black;
    border-radius: 7px;
    background-color: white;
    cursor: pointer;
`;

export { FormContainer, InputForm, Button, Title };
