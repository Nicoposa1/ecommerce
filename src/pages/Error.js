import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'


export default function Error() {
  return (
    <div>
      <SEO title='Compra cancelada' />
      <Purchase>
        <h2>Compra Candelada</h2>
          <p>Lamentamos que tu compra fue cancelada</p>
          <p>¡Te esperamos de vuelta, no pares de aprender!</p>
          <span rol='img' aria-label='emoji'>💚</span>
        <Link to='/' >
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
