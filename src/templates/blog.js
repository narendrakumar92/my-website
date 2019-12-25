import React from 'react'
import LayoutTemplate from './layoutTemplate'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { checkPropTypes } from 'prop-types'
import Head from '../components/head'
// add export to allow gatsby to have permission to execute the quqery

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
            json
        }
    }
}
`
// takes the query result data from above and provides it to down below 
const Blog = (props) => {
    //to render image
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <LayoutTemplate>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </LayoutTemplate>
    )
}
export default Blog