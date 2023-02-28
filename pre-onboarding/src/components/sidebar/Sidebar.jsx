import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Link } from 'react-router-dom';

export default function sidebar() {
    return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Menu</h3>
                <ul className='sidebarList'>
                    <nav>
                        <Link to='/'>
                            <li className='sidebarListItem'>
                                <HomeIcon className='sidebarIcon'/>
                                Home
                            </li>
                        </Link>
                        <Link to='/page1'>
                            <li className='sidebarListItem'>
                                <LooksOneIcon className='sidebarIcon'/>
                                Page1
                            </li>
                        </Link>
                        <Link to='/page2'>
                            <li className='sidebarListItem'>
                                <LooksTwoIcon className='sidebarIcon'/>
                                Page2
                            </li>
                        </Link>
                    </nav>
                </ul>
            </div>
        </div>
    </div>
    )
}