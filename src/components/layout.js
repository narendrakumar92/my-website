import React from 'react'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
const Layout = (props) => {
    return (
        
        <div className={layoutStyles.container}>
            <div className={layoutStyles.mobileonly}>
                <Header/>
            </div>
            <main>
            <div className={layoutStyles.content}>
            {props.children}
            </div>
            </main>
            <div className={layoutStyles.leftsidebar}>
                <div className={layoutStyles.desktoponly}>
                    <Sidebar />
                </div>
            </div>
            
        </div>
    )
}

export default Layout