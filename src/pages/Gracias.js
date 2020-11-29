import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    font-family: Roboto, sans-serif;
  }
`


export default function Gracias() {
  return (
    <div>
    <GlobalStyle/>
      <SEO tittle='compra exitosa' />
      <Purchase >
        <h2>Compra exitosa</h2>
        <p>Espeo que disfrutes tu swag, lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta, no pares de aprender!</p>
        <span rol='img' aria-label='emoji'>💚</span>
      <Link to='/' >
        <Button>Volver al catálogo</Button>
      </Link>
      </Purchase>
    </div>
  )
}
