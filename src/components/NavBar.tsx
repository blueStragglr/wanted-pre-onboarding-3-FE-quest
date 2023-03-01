import React from 'react';
import PageButton from './PageButton';

interface NavType {
  labelList: string[];
}

function NavBar(props: NavType) {
  const { labelList } = { ...props };
  return (
    <nav>
      {labelList.map((item: string, index: number) => (
        <PageButton label={item} key={index} />
      ))}
    </nav>
  );
}

export default NavBar;
