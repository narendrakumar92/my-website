import React from 'react'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
const Layout = (props) => {
    return (
        
        <div className={layoutStyles.container}>
            <Header />
            <main style={{width: `70%`, float: `left`}}>
            <div className={layoutStyles.content}>
            {props.children}
            </div>
            </main>
            <div className={layoutStyles.leftsidebar}>
            <Sidebar />
            </div>
            
        </div>
    )
}

export default Layout