require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}.js`,
})


module.exports = {
  siteMetadata: {
    title: `platziswag`,
    description: `El mejor swag de platzi disponible para ti`,
    author: `@nicoposa1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `roboto\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [`Price`],
        secretKey: process.env.STRIPE_SK,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
