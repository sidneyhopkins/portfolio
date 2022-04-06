import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { projects } from "../../components/data"
import * as styles from "../../styles/projects.module.scss"
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo />
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.wrapper}>
          {projects.map(item => (
            <div
              className={styles.project}
              style={{ backgroundColor: item.bgc }}
            >
              <div className={styles.top}>
                <img className={styles.image} src={item.img} alt={item.alt} />
                <div className={styles.links}>
                  <div>
                    {item.code !== undefined && (
                      <div className={styles.line}>
                        <a
                          className={styles.link}
                          href={item.code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>See the code</span>
                        </a>
                        <ChevronRightRoundedIcon className={styles.arrow} />
                      </div>
                    )}
                  </div>
                  <div>
                    {item.site !== undefined && (
                      <div className={styles.line}>
                        <a
                          className={styles.link}
                          href={item.site}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Browse the site</span>
                        </a>
                        <ChevronRightRoundedIcon className={styles.arrow} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.bottom}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
