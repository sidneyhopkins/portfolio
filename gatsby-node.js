// gatsby-node.js

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_API_KEY}`
  )

  const data = await response.json()

  createNode({
    id: data.date,
    data: data,
    explanation: data.explanation,
    hdurl: data.hdurl,
    date: data.date,
    title: data.title,
    copyright: data.copyright,
    internal: {
      type: "apod",
      contentDigest: createContentDigest(data),
    },
  })
}
