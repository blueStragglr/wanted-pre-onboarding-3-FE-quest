import React from 'react';

interface Page {
  title: string;
  path: string;
  type: string;
}

interface Props {
  pages: Page[];
  activePage: string;
  onSetActivePage: (pagePath: string, pageType: string) => void;
  onAddNewPage: () => void;
}

const Sidebar: React.FC<Props> = ({ pages, activePage, onSetActivePage, onAddNewPage }) => {
  return (
    <div className="sidebar">
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <a href="#" className={page.path === activePage ? 'active' : ''} onClick={() => onSetActivePage(page.path, page.type)}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>
      <button className="add-page-btn" onClick={onAddNewPage}>Add New Page</button>
    </div>
  );
};

export default Sidebar;
