/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-netlify"],
  siteMetadata: {
    title: "Sidney Hopkins",
    description: "Front-End Developer",
    copyright: "Copyright © 2022 Sidney Hopkins",
  },
}
