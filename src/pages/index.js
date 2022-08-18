import { graphql, Link } from "gatsby";
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)

  const { title } = data.site.siteMetadata
  const banner = data.file

  return (
    <Layout>
      <section className={styles.hero}>
        <div className="container">
          <h4>Everything is possible with</h4>
          <h1>{ title }</h1>
          <Link className={styles.button} to="/about">Know more</Link>
        </div>
        <GatsbyImage className={styles.background_logo} image={ getImage(banner.childImageSharp.gatsbyImageData) } alt="Thumbnail" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "logo.png"}) {
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

export const Head = () => <title>Superman</title>