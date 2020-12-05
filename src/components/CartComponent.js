import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"
import { CartContext } from "../context"

export default function CartComponent() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()


  const getTotal = () => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + current.unit_amount * current.qty,
        0
      )
    )
    }
  useEffect(() => {
    setStripe(
      window.Stripe('pk_test_51HtgcKJbifrY65Q9d5V4XTniletONrTgiTO9XRMCOT0ir1JiLybsOFlTOglpDGAuOs8uJ2sBAsIVEX0Pu1vk4oOY00RBqCDtXu')
    )
    getTotal()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { error } = await stripe.redirectToCheckout({
      lineItems: cart.map(({ id, quantity}) => ({
        price: id,
        quantity : quantity,
      })),
      mode: 'payment',
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })
    if (error) {
      throw error
    }
  }


  return (
    <StyledCart>
      <h2>Carrito de Compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Productos</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map((swag) => (
            <tr key={swag.id}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} /> {swag.name}
              </td>
              <td>USD: {priceFormat(swag.unit_amount)}</td>
              <td>{swag.qty}</td>
              <td>{priceFormat(swag.qty * swag.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal</h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={cart.length === 0} >Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}