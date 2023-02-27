import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import { loginBoxStyle, loginInputBoxStyle, loginButtonStyle } from './LoginPage.styles';

export function LoginPage() {
    const navigate = useNavigate();

    const signInHander = (event: React.SyntheticEvent) => {
        event.preventDefault();
        toast("로그인 폼 제출!", {
            onClose: () => navigate('/'),
            icon: '👏',
        });
    };
    return (
        <div className={loginBoxStyle}>
            <form onSubmit={signInHander}>
                <label htmlFor="user_id">ID</label>
                <div className={loginInputBoxStyle}>
                    <FontAwesomeIcon icon={faUser} />
                    <input id='user_id' name='user_id' type="text" placeholder="Username" />
                </div>
                <label htmlFor="user_pw">PASSWORD</label>
                <div className={loginInputBoxStyle}>
                    <FontAwesomeIcon icon={faLock} />
                    <input id='user_pw' name='user_pw' type="password" placeholder="Password" />
                </div>
                <button type='submit' className={loginButtonStyle}>Sign In <FontAwesomeIcon icon={faRightToBracket} /></button>
            </form>
        </div>
    );
} 