import { useDeferredValue, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageItem from './PageItem';

export default function SideBar() {
  const [clickedPage, setClickedPage] = useState<string>('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const sideBarItems = [
    { title: 'Page A', path: 'page-a' },
    { title: 'Page B', path: 'page-b' },
    { title: 'Page C', path: 'page-c' },
  ];

  useEffect(() => {
    pathname === '/' && setClickedPage('');
  }, [pathname]);

  return (
    <div className="sidebar">
      {sideBarItems.map((item, idx) => (
        <PageItem
          key={item.title}
          title={item.title}
          idx={idx}
          clickedPage={clickedPage}
          onClickPageItem={() => {
            setClickedPage(item.title);
            navigate(item.path);
          }}
        />
      ))}
    </div>
  );
}
