import React from 'react'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import sidebar from './sidebar'
const Layout = (props) => {
    return (
        
        <div className={layoutStyles.container}>
            <Header />
            <main style={{width: `70%`, float: `left`}}>
            {props.children}</main>
            <Sidebar />
        </div>
    )
}

export default Layout