import React from 'react';
import './header.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingIcon from '@mui/icons-material/Settings'

const Header = () => {
    return (
        <div className='topbar'>
          <div className='topbarWrapper'>
            <div className='topLeft'>
              <span className='logo'>Wanted Pre-onboarding</span>
            </div>
            <div className='topRight'>
              <div className='topbarIconContainer'>
                <NotificationsNoneIcon/>
                <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIconContainer'>
                <LanguageIcon/>
                <span className='topIconBadge'>2</span>
              </div>
              <div className='topbarIconContainer'>
                <SettingIcon/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header