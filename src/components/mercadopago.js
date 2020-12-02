const mercadopago = require('mercadopago')
import MERCADOPAGO_SK from '../../.env.develoment'

mercadopago.configure({
  access_token: 'MERCADOPAGO_SK'
});