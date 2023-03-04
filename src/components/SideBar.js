import {NavLink, useLocation } from 'react-router-dom';

export default function Sidebar (){
    const path = useLocation().pathname;
     const normalCss = 'font-normal text-stone-500'
     const activeCss = 'font-bold text-stone-900';
     const liCss = 'w-[100px] h-[50px] p-[10px] text-center'

     return(
        <nav className='w-[200px] mt-[30px]'>  
            <ul className='flex flex-col items-center'>
                <li className={liCss}>
                    <NavLink to='/page01' className={path === '/page01' || path === '/' ? activeCss : normalCss}>
                        페이지01
                    </NavLink>
                </li>
                <li className={liCss}>
                    <NavLink to='/page02' className={path === '/page02' ? activeCss : normalCss}>
                        페이지02
                    </NavLink>
                </li>
                <li className={liCss}>
                    <NavLink to='/page03' className={path === '/page03' ? activeCss : normalCss}>
                        페이지03
                    </NavLink>
                </li>
            </ul>
        </nav>
     );

}

