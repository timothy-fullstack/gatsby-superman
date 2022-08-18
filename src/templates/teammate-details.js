import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import * as styles from '../styles/teammate-details.module.css'

export default function teammateDetails({ data }) {
    const { html } = data.markdownRemark
    const { name, alias, featuredImg } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <section className={ styles.teammate_details }>
                <div className='container'>
                    <div className=''>
                        <h1>{ name }</h1>
                        <h3>{ alias }</h3>
                        <GatsbyImage className={ styles.banner } image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Thumbnail" />
                    </div>
                    <div>
                        <div className={ styles.body } dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query TeammateDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            alias
            name
            slug
            featuredImg {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP]
                    )
                }
            }
        }
    }
  }
  
`
export const Head = () => <title>Superman | Member</title>

