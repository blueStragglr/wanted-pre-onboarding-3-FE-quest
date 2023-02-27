import _ from 'lodash';
import React, { HTMLAttributes, HtmlHTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageItem from './PageItem';

export default function SideBar() {
  const navigate = useNavigate();
  const [sideBarItems, setSideBarItems] = useState([
    { title: 'Page A', path: 'page-a', isClicked: false },
    { title: 'Page B', path: 'page-b', isClicked: false },
    { title: 'Page C', path: 'page-c', isClicked: false },
  ]);

  return (
    <div className="pages">
      {sideBarItems.map((item, idx) => (
        <PageItem
          key={item.title}
          title={item.title}
          idx={idx}
          isClicked={item.isClicked}
          onClickPageItem={(e: React.MouseEvent) => {
            const targetIdx: number | undefined = Number(
              (e.target as HTMLDivElement).dataset.idx
            );
            const newSideBarItems = _.cloneDeep(sideBarItems).map((item, idx) =>
              idx === targetIdx ? { ...item, isClicked: true } : { ...item }
            );
            setSideBarItems(newSideBarItems);
            navigate(item.path);
          }}
        />
      ))}
    </div>
  );
}
