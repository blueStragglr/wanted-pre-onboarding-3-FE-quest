import React from 'react';
import { Link } from 'react-router-dom';
import $ from './sideBar.module.scss'

const SideBar = () => {
  const CONSTANTS = ["A", "B", "C"]
  return (
    <article className={$.side_bar}>
      <ul>
        {
          CONSTANTS.map((page) => {
            return  <li><Link>{`Page ${page}`}</Link></li>
          })
        }
      </ul>
    </article>
  );
};

export default SideBar;