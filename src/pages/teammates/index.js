import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Teammates({ data }) {
  console.log(data)
  
  const teammates = data.teammates.nodes

  return (
    <Layout>
      <section className={styles.projects}>
        <div className='container'> 
          <h1>Justice friends</h1>
          <div className={styles.projects_grid}>
            {teammates.map(teammate => (
              <Link className={styles.project} to={"/teammates/" + teammate.frontmatter.slug} key={teammate.id}>
                <GatsbyImage className={styles.project_image} image={ getImage(teammate.frontmatter.thumb.childImageSharp.gatsbyImageData) } alt="Thumbnail" />
                <div className={ styles.project_info }> 
                  <h3> { teammate.frontmatter.name } </h3>
                  <p> { teammate.frontmatter.alias }</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
        
    </Layout>
  )
}

export const query = graphql`
query TeammatePage {
  teammates: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        name
        alias
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
      id  
    }
  }
}


`