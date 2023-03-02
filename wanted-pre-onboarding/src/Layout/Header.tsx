import React from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    return (
        <Link to='/'>
            <div className="flex h-[50px] border-b-2 text-lg font-semibold  px-[10px]  items-center">Wanted Pre-onboarding course</div>
        </Link>
    )
    
    
}

export default Header;