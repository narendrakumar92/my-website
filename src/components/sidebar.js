import React from "react"
import { Link, graphql, useStaticQuery, withPrefix } from 'gatsby'
import sidebarStyles from './sidebar.module.scss'
import Footer from './footer'
import { SocialIcon } from 'react-social-icons';
const Sidebar = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            authorMetadata {
              name,
              photo,
              bio,
              contacts {
                  linkedin
              }
            }
          }
        }
      }
    `)
    const author = data.site.siteMetadata.authorMetadata;
    return (
    <aside style={{ padding: `10px`}}>
        <Link to='/'>
            <img  className={sidebarStyles.authorimg} src={withPrefix(author.photo)}
            alt={author.name}
            />
        </Link>
        <h2 className={sidebarStyles.authorname}>
          <a href={author.contacts.linkedin} target="_blank">
          {author.name} </a>
        </h2>
        
        <p className={sidebarStyles.authorabout} dangerouslySetInnerHTML={{ __html: author.bio }}>            
        </p>
        
        <nav>
        <ul className={sidebarStyles.navList}>
          <li>
            <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/'>Blog</Link>
          </li>
          <li>
            <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/about'>About</Link>
          </li>
          <li>
            <Link className={sidebarStyles.navItem} activeClassName={sidebarStyles.activeNavItem} to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    
    <Footer></Footer>
    </aside>
    
    )
}

export default Sidebar