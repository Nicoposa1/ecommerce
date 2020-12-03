const { graphql } = require('gatsby')
const path = require('path')

exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Products.js`);
  const result = await graphql(`
  query GET_SKU{
    allStripePrice{
      edges{
        node{
          id
          unit_amount
          product{
            name
            metadata{
              img
              Description
              wear
            }
          }
        }
      }
    }
  }
`)
  if(result.errors){
    throw result.errors
  }

  result.data.allStripePrice.edges.forEach(({node}) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}