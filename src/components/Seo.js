import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function Seo({ description, lang, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            image
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: "og:description",
          content: description || site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "twitter:title",
          content: title || site.siteMetadata.title,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image,
        },
        {
          property: "og:image",
          content: site.siteMetadata.image,
        },
      ]}
      link={[
        {
          rel: "shortcut icon",
          type: "image/svg+xml",
          href: `${site.siteMetadata.image}`,
        },
      ]}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
