import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section className={styles.header}>
        <h2>About Me</h2>
      </section>
    </Layout>
  )
}
