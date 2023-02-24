import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        
          <Sidebar/>
          <Content/>
        
    </div>
  )
}

export default Layout