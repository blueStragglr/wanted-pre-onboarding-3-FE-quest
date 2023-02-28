import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidbar'

import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default Layout