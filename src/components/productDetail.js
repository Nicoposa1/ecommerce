import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import {Tag, SizeButton, QtyButton, SizeSelect, Button, StyledProductDetail, QtySelect} from '../styles/components'
import {SEO, Stars} from '../components'
import {CartContext} from '../context'

export default function ProductDetail({ unit_amount, id, product : {name, metadata} }) {
  const formatePrice = priceFormat(unit_amount)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({unit_amount, id, name, metadata, qty})
  }
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name}/>
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <p>USD {formatePrice}</p>
        <Stars/>
        {metadata.wear && <h3>Color: Azul</h3> }
        <small>{metadata.Description}</small>
        {metadata.wear && (
          <SizeSelect selected={size} >
            <SizeButton onClick={() => setSize(1)} >XS</SizeButton>
            <SizeButton onClick={() => setSize(2)} >S</SizeButton>
            <SizeButton onClick={() => setSize(3)} >M</SizeButton>
            <SizeButton onClick={() => setSize(4)} >L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty-1) : null)}>-</button>
          <input type="text" disabled value={qty}/>
          <button onClick={() => setQty(qty + 1)} >+</button>
        </QtySelect>
        <Button onClick={handleSubmit} >Agregar Al Carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
