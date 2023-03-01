import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const SideBar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <aside>
      <div onClick={() => navigate('/page1')} className='move-page'>
        Page1
      </div>
      <div onClick={() => navigate('/page2')} className='move-page'>
        Page2
      </div>
      <div onClick={() => navigate('/page3')} className='move-page'>
        Page3
      </div>
    </aside>
  );
};

export default SideBar;
