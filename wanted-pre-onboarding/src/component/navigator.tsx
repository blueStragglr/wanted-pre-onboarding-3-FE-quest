import React from 'react';

interface Props {
  onLogout: () => void;
}

const TopNavigator: React.FC<Props> = ({ onLogout }) => {
  return (
    <div className="top-navigator">
      <div className="logo">
        <span>React App</span>
      </div>
      <div className="menu">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};



export default TopNavigator;
