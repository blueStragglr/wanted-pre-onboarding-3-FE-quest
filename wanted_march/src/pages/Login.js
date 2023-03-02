import React from 'react';
import '../style/login.css';

const Login = () => {


    const onClickLoginSubmit = () => {
        window.location.href = "/Main"
    }

    return (
        <article className="login">
            <div className="login__inner">
                <h1 className="login__title">Login</h1>
                <form action="" className="login-form">
                    <ul className="login-form__list">
                        <li className="login-form__item">
                            <input type="text" placeholder="ID" />
                        </li>
                        <li className="login-form__item">
                            <input type="password" placeholder="Password" />
                        </li>
                    </ul>
                    <button type="button" className="login-form__btn-submit" onClick={onClickLoginSubmit}>로그인</button>
                </form>
            </div>
        </article>
    );
};

export default Login;