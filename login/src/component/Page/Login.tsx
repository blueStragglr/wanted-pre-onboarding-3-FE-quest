import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const submit = (e:FormEvent) => {
        e.preventDefault();

        navigate('/')
    }

    return (
        <form className="loginForm" onSubmit={submit}>
            <div className="login">
                <h1 className="loginH1">Login</h1>
                <div className="idpw">
                    <p>ID</p>
                    <input type="text" name="id"/>
                </div>
                <div className="idpw">
                    <p>Password</p>
                    <input type="password" name="pw"/>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}