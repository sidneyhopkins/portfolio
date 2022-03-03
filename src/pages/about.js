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
          <ul>
            <li>
              Daring Greatly <span>by Brene Brown</span>
            </li>
            <li>
              Piranesi <span>by Susanna Clarke</span>
            </li>
            <li>
              Harry Potter and the Order of the Pheonix
              <span>by JK Rowling</span>
            </li>
          </ul>
        </div>
        <div className={styles.c}>
          <h3>TV</h3>
          <ul>
            <li>Attack on Titan</li>
            <li>Dark</li>
            <li>Archive 81</li>
            <li>Doctor Who</li>
          </ul>
        </div>
        <div className={styles.f}>
          <h3>Movies</h3>
          <ul>
            <li>Harry Potter and the Half Blood Prince</li>
            <li>Harry Potter and the Prisoner of Azkaban</li>
            <li>How to Train Your Dragon</li>
          </ul>
        </div>
        <div className={styles.d}></div>
        <div className={styles.g}></div>
        <div className={styles.h}></div>
        <div className={styles.i}></div>
      </section>
    </Layout>
  )
}
