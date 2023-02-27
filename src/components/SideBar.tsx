import _ from 'lodash';
import React, { HTMLAttributes, HtmlHTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageItem from './PageItem';

export default function SideBar() {
  const navigate = useNavigate();
  const [sideBarItems, setSideBarItems] = useState([
    { title: 'Page A', path: 'page-a' },
    { title: 'Page B', path: 'page-b' },
    { title: 'Page C', path: 'page-c' },
  ]);

  return (
    <div className="sidebar">
      {sideBarItems.map((item, idx) => (
        <PageItem
          key={item.title}
          title={item.title}
          idx={idx}
          onClickPageItem={() => {
            navigate(item.path);
          }}
        />
      ))}
    </div>
  );
}
