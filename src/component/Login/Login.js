import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState ({
        id : '',
        pw : ''
    })

    const {id, pw} = login;

    const onInputChange = (e) => {
        const {value, name} = e.target

        setLogin({
            ...login,
            [name] : value
        })
        console.log(login)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id ==='') {
            alert('id를 입력해주세요.')
            return
        } if (pw === '') {
            alert('pw를 입력해주세요.')
            return
        } else {
            //localStorage.setItem(key, value)
            localStorage.setItem('Mylogin', JSON.stringify(login));
            navigate("/");
        }
    }

    return (
        <div className='flex items-center justify-center h-screen font-semibold text-xl flex-col'>
            <form onSubmit={handleSubmit} className = 'flex flex-col bg-slate-200 p-10 rounded-xl mx-auto my-4 h-2/4 w-1/3 justify-center items-center'>
                <h1 className=' text-3xl  text-rose-500'>로그인</h1>
                <label className='mt-8'>아이디</label>
                <input type='text'
                    placeholder='ID를 입력해주세요'
                    value={id}
                    name = 'id'
                    onChange={onInputChange}
                    className='rounded-lg px-3 py-2 w-2/3 text-gray-700 focus:outline-none focus:shadow-outline mt-2'/>
            
                <label className=' mt-12'>비밀번호</label>
                <input type='text'
                    placeholder='비밀번호를 입력해주세요'
                    value={pw}
                    name = 'pw'
                    onChange={onInputChange}
                    className='rounded-lg px-3 py-2 w-2/3 text-gray-700 focus:outline-none focus:shadow-outline mt-2'/>
                <button className='mt-8 bg-zinc-500 items-center w-1/2 rounded-lg h-12 hover:text-white'>로그인</button> 
            </form>
        </div>
    );
};

export default Login;