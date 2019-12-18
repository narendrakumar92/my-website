import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { checkPropTypes } from 'prop-types'
// add export to allow gatsby to have permission to execute the quqery
export const query = graphql`
    query ($slug: String) {
        markdownRemark(
        fields: {
            slug: {
            eq:$slug
            }
        }
        ){
        frontmatter {
            title
            date
        }
        html
        }
    }
`
// takes the query result data from above and provides it to down below 
const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}
export default Blog