import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section className={styles.header}>
        <h2>About</h2>
        <p>I've been learning web development since the spring of 2021...</p>
      </section>
      <section className={styles.content}>
        <h3>Code</h3>
        <p>
          I started learning JavaScript in early 2021. HTML and CSS followed. I
          took my time learning and understanding the basics. Over the summer, I
          built some of my first apps, including a drum kit, a clock, and a
          calculator.
          <br /> In the fall of that year, I learned my first framework- React.
          My strong foundation in JavaScript really helped me as I made new
          connections about how React works. Things really started picking up
          for me then.
          <br /> My first React apps included an ecommerce page, a journal, and
          a weather app. Which can be viewed in my projects page.
        </p>
        <h3>Reading List</h3>
        <p>Brene Brown, Harry Potter</p>
      </section>
    </Layout>
  )
}
