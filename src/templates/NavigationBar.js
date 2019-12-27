import React from 'react'
import NavigationStyle from './NavigationBar.module.scss'
import { Link } from 'gatsby'
const NavigationBar = () => {
    return (
            <header>
                <nav>
                    <ul className={NavigationStyle.navList}>
                        <li>
                            <Link className={NavigationStyle.navItem} activeClassName={NavigationStyle.activeNavItem} to='/'>Blog</Link>
                        </li>
                        <li>
                            <Link className={NavigationStyle.navItem} activeClassName={NavigationStyle.activeNavItem} to='/about'>About</Link>
                        </li>
                        <li>
                            <Link className={NavigationStyle.navItem} activeClassName={NavigationStyle.activeNavItem} to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
    );
}
export default NavigationBar;