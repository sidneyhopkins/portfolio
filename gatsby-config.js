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
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sidney Hopkins Portfolio",
        short_name: "Sidney Hopkins",
        lang: "en",
        description:
          "Sidney Hopkins' web development portfolio website. Learn more about her work.",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#A02C09",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        legacy: "true",
      },
    },
  ],
  siteMetadata: {
    title: "Sidney Hopkins",
    description: "Front-End Developer",
    author: "Sidney Hopkins",
    copyright: "Copyright © 2022 Sidney Hopkins",
    keywords: "info, resume, web developer, frontend, front end",
    image: "src/images/favicon.svg",
  },
}
