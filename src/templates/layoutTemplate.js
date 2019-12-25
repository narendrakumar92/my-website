import React from 'react'
import '../styles/index.scss'
import layoutStyles from '../components/layout.module.scss'
import NavigationBar from './NavigationBar'
const LayoutTemplate = (props) => {
    return (
        <div className={layoutStyles.container}>
            <NavigationBar></NavigationBar>
            <div>
            {props.children}
            </div>
        </div>
    )
}

export default LayoutTemplate