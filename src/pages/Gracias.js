import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function Gracias() {
  return (
    <div>
      <SEO title='compra exitosa' />
      <Purchase >
        <h2>Compra exitosa</h2>
        <p>Espeo que disfrutes tu swag, lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta, no pares de aprender!</p>
        <span role='img' aria-label='emoji'>💚</span>
      <Link to='/' >
        <Button>Volver al catálogo</Button>
      </Link>
      </Purchase>
    </div>
  )
}
