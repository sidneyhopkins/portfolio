import React from "react"
import Layout from "../../components/Layout"
import { projects } from "../data"
import * as style from "../../styles/projects.module.css"

export default function ProjectsPage() {
  return (
    <Layout>
      <section className={style.projects}>
        <h2>Projects</h2>
        <div className={style.grid}>
          {projects.map(item => (
            <div key={item.id} className={style.box}>
              <img src={item.img} alt={item.alt} />
              <div className={style.container}>
                <figcaption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={style.links}>
                    <div>
                      {item.code !== undefined && (
                        <div>
                          <a
                            className={style.link}
                            href={item.code}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code
                          </a>
                        </div>
                      )}
                    </div>
                    <div>
                      {item.site !== undefined && (
                        <div>
                          <a
                            className={style.link}
                            href={item.site}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Site
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </figcaption>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
