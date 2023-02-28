import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from './sideBar.module.scss'

const SideBar = () => {
  const CONSTANTS = ["A", "B", "C"]
  const location = useLocation()

  return (
    <article className={$.side_bar}>
      <ul>
        {
          CONSTANTS.map((page) => {
            return  (
              <li key={`page${page}`} className={`/page${page}` === location.pathname ? $.active : ''} >
                <Link to={`/page${page}`}>{`Page ${page}`}</Link>
              </li>
            )
          })
        }
      </ul>
    </article>
  );
};

export default SideBar;