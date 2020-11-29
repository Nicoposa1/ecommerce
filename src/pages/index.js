import React from "react"
import { Link } from "gatsby"

import { SEO, Jumbo, Image } from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    <Link to="/Gracias/">Go to Gracias</Link> <br />
    <Link to='/Error/'>Go to Error</Link> <br/>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
