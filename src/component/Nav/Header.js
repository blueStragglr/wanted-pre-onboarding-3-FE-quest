import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const Mylogin = JSON.parse(localStorage.getItem('Mylogin'))

    const onChangeLogout = () => {
        localStorage.removeItem('Mylogin')
        navigate('/')
    }
    return (
        <div className='flex justify-between font-bold h-16 text-3xl border-b w-full p-2 bg-slate-200'>
            <div>
                <Link to= '/'>
                    <h1>
                        Wanted Pre-onboarding course
                    </h1> 
                </Link>
            </div>

            <div className = 'flex justify-center grid-cols-2 '>
                <div className='mx-4'>
                    {localStorage.Mylogin ? (
                        <p className='flex'>
                            <p className='text-blue-400'>{Mylogin.id}</p>님
                        </p>
                    ) : (
                        <Link to = "/login"><p className='hover:text-blue-200'>로그인</p></Link>
                    )}
                </div>

                <div className='mx-4'>
                    {localStorage.Mylogin ? (
                        <h1 onClick= {onChangeLogout} className='hover:text-blue-400'>로그아웃</h1>
                    ) : (null)}
                </div>
                
            </div>
        </div>
    );
};

export default Header;