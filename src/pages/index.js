import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
const IndexPage = () => {
  return (
    <div> 
      <Header />
      <h1>Hello!</h1>
      <h2>I'm Naren, Software Engineer currently working at Oracle Cloud, Seattle</h2>
      <p> Need a hand? <Link to='/contact'> Contact me.</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage