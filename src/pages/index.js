import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo, Image } from '../components'

export const query = graphql `
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata{
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) =>(
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
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
