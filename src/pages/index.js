import { graphql, Link } from "gatsby";
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)

  const { title } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.hero}>
        <div className="container">
          <h4>Everything is possible with</h4>
          <h1>{ title }</h1>
          <Link className={styles.button} to="/about">Know more</Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "share.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          )
      }
    },
    site {
      siteMetadata {
        title
      }
    }
  }
`