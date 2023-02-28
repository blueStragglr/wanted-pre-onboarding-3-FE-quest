import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [btnName, setBtnName] = useState('Login');

  const accessFlag = sessionStorage.getItem('accessFlag');

  useEffect(() => {
    accessFlag ? setBtnName('Logout') : setBtnName('Login');
  }, [btnName, accessFlag]);

  /**
   * title 클릭 시 메인 이동
   */
  const onClickTitle = () => {
    navigate('/');
  };

  /**
   * login | logout button 클릭
   */
  const onClickLoginBtn = () => {
    if (btnName === 'Login') {
      navigate('/login');
    }

    if (btnName === 'Logout') {
      sessionStorage.removeItem('accessFlag');
      navigate('/');
    }
  };

  return (
    <div className="header">
      <div className="header__title">
        <h1 onClick={onClickTitle}>Wanted Pre-onboarding course</h1>
      </div>
      <div className="box__button">
        <button className="login__button" onClick={onClickLoginBtn}>
          {btnName}
        </button>
      </div>
    </div>
  );
}
