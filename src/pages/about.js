import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section className={styles.header}>
        <h2>About</h2>
      </section>
      <section className={styles.content}>
        <div className={styles.a}>
          <h3>Code</h3>
          <p>
            I spend most of my time building apps and webpages using React. I
            plan to learn the back end in greater detail and pick up new
            languages as my projects get more complex. Some of my coding
            interests include animation and implementing unique APIs. I also
            really like to play with color.
          </p>
        </div>
        <div className={styles.b}>
          <h3>Reading List</h3>
          <p> Daring Greatly -Brene Brown,</p>
          <p>
            Harry Potter and the Order of the Pheonix, <br />
            Harry Potter and the Half Blood Prince -JK Rowling
          </p>
        </div>
        <div className={styles.c}>
          <h3>TV</h3>
          <p>Attack on Titan, Dark, Archive 81, Doctor Who</p>
        </div>
        <div className={styles.f}>
          <h3>Movies</h3>
          <p>Harry Potter, Harry Potter, Harry Potter </p>
        </div>
        <div className={styles.d}></div>
        <div className={styles.e}></div>
      </section>
    </Layout>
  )
}
