import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';
import Nav from '../Nav/Nav';
import Aside from '../Aside/Aside';

export default function Root() {
  // Root 안에 navbar, 그리고 aside를 누르면 content나 home이 노출되게 해야하므로 outlet을 사용
  return (
    <>
      <Nav/>
      <section className={styles.section}>
        <Aside />
        <Outlet />
      </section>
    </>
  );
}

