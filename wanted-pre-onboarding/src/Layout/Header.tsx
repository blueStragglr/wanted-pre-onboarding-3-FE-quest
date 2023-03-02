import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = ()=>{
    const { state } = useLocation();
    console.log(state)

    return (
        <div className="flex flex-row  border-b-2 h-[50px] px-[10px]   items-center">
            <Link to='/'>
                <div className="text-lg font-semibold">Wanted Pre-onboarding course</div>
            </Link>
           {state ?  <div className="ml-[50px]">{state}님 안녕하세요</div> : <Link to='/login'>
                <div className="ml-[50px]  bg-[#7dd3fc] p-[8px] px-[10px] rounded-lg flex mx-auto">로그인</div>
            </Link>}
            
        </div>
    )
    
    
}

export default Header;