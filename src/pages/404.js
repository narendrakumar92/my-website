import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
const NotFound = () => {
    return (
        <Layout>
            <Head title='404'/>
            <h2 style={{margin: `100px`}}>Page not found</h2>
        </Layout>
    )
}

export default NotFound