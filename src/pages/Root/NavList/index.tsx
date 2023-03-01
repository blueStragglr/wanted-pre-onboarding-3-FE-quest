import { NavLink } from 'react-router-dom';

type PageLinkProps = {
  pageName: string;
};

const PageLink = ({ pageName }: PageLinkProps) => {
  let activeClassName = 'text-sky-500';

  return (
    <NavLink
      to={`${pageName}`}
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      {pageName}
    </NavLink>
  );
};

export const NavList = () => {
  return (
    <nav className="basis-1/6 border-r-2 text-center">
      <ul>
        <li className="m-3">
          <PageLink pageName="pageA" />
        </li>
        <li className="m-3">
          <PageLink pageName="pageB" />
        </li>
        <li className="m-3">
          <PageLink pageName="pageC" />
        </li>
      </ul>
    </nav>
  );
};
