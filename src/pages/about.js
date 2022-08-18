import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function About({ data }) {
  const headshot = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
        <section className={styles.about}>
          <div className='container'>
           
            <div className={styles.about_content}>
              <GatsbyImage className={styles.about_image} image={ headshot } alt="Superman Image" />
              <div>
                <h1>All about Superman</h1>
                <p>Sent as a baby to Earth from the dying planet Krypton, Kal-El was adopted by Martha and Jonathan Kent of Smallville, Kansas. Growing up as Clark Kent, he devoted his life to helping others with the abilities he developed from Earth's sun. Moving to Metropolis, he became Superman, while still maintaining his secret identity as Clark Kent, who works at the Daily Planet newspaper</p><br/>
                <p>Superman is an extremely moral person, believing it immoral to kill anyone under any circumstances, and will do whatever he can to avoid it. Clark's upbringing in the Midwest largely contributes to this, as his adoptive parents raised him to do the right thing.</p>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query Headshot {
    file(relativePath: {eq: "headshot.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          )
      }
    }
  }
`

export const Head = () => <title>Superman | About</title>