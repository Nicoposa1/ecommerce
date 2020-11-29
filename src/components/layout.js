/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from '../styles/components'
import { createGlobalStyle } from 'styled-components'



import Header from "./header"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    font-family: Roboto, sans-serif;
  }
`

const Layout = ({ children }) => (
      <>
        <GlobalStyle />
        <Header/>
        <Content>
          <main>{children}</main>
          <Footer>
            Con ❤️ por 
            <a href="https://www.instagram.com/nicoposa1/">Nico</a>
          </Footer>
        </Content>
      </>
    )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
