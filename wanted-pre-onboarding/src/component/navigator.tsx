import React from 'react';

interface Props {
  isLoggedIn: boolean;
  onLogout: () => void;
  openModal: () => void;
}

const TopNavigator: React.FC<Props> = ({isLoggedIn , onLogout, openModal }) => {
  return (
    <div className="top-navigator">
      <div className="logo">
        <span>Wanted-Pre-OnBoarding</span>
      </div>
      <div className="menu">
        {
          isLoggedIn ? 
            <button onClick={onLogout}>Logout</button>
            : <button onClick={openModal}>Login</button>

        }
      </div>
    </div>
  );
};



export default TopNavigator;
