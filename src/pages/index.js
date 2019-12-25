import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'
const IndexPage = () => {
  return (
    <div> 
      <Layout>
      <Head title="Home"/>
        <h1>Hello!</h1>
        <p>I'm a Software Engineer with 3 years of experience. I studied Masters in Computer Science at Arizona State University (2016-2018), and I've been a Software Engineer at Oracle Cloud since July 2018. I like building Scalable and Distributed Applications.</p>
      </Layout>
    </div>
  )
}

export default IndexPage