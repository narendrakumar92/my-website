import React from "react"

import Layout from '../components/layout'
import { Link } from 'gatsby'
const IndexPage = () => {
  return (
    <div> 
      <Layout>
        <h1>Hello!</h1>
        <h2>I'm Naren, Software Engineer currently working at Oracle Cloud, Seattle</h2>
        <p> Need a hand? <Link to='/contact'> Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage