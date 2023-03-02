import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();
    const [userId,setUserId] = useState('')

    const handleSubmit = () =>{
        navigate('/',{state:userId})        
     }
    return(
            <div className="w-full my-auto">
                <div className="w-[400px] h-[400px]  rounded-lg mx-auto  px-[20px] pt-[20px] border-2">
                    <div className='text-lg font-semibold mx-auto'>계속하려면 로그인해주세요</div>
                    <form id='loginForm'   className="items-center flex flex-col mt-[30px]">
                        <label>아이디</label>
                        <input placeholder="아이디" id='userid' onChange={e => setUserId(e.target.value)} className="w-4/5 h-[35px]"  />
                        <label className='mt-[20px]'>비밀번호</label>
                        <input placeholder="비밀번호" id='userpwd' type='password' className='w-4/5 h-[35px]'/>
                    </form>
                    <button  className=' bg-[#7dd3fc] p-[8px] px-[10px] rounded-lg flex mx-auto mt-[70px]'
                   onClick={handleSubmit}>로그인</button>
                </div>
            </div>
            )
    }

export default Login;