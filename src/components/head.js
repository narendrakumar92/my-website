import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from '../../static/favicon.png'

const Head = ({ title }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                }
            }
        }
    `)
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.siteTitle}`}>
            <link rel="icon" href={favicon} />
        </Helmet>
    )
}
export default Head