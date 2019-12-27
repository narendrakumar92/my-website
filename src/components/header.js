import React from 'react'
import { Link, graphql, useStaticQuery, withPrefix } from 'gatsby'
import headerStyles from './header.module.scss'
import sidebarStyles from './sidebar.module.scss'
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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
    <header className={headerStyles.header}> 
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
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    
  )
}

export default Header