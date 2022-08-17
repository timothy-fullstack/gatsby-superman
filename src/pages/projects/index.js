import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Projects({ data }) {
  console.log(data)
  
  const projects = data.projects.nodes

  return (
    <Layout>
      <section className={styles.projects}>
        <div className='container'> 
          <h1>Justice friends</h1>
          <div className={styles.projects_grid}>
            {projects.map(project => (
              <Link className={styles.project} to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <GatsbyImage className={styles.project_image} image={ getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData) } alt="Thumbnail" />
                <div className={ styles.project_info }> 
                  <h3> { project.frontmatter.name } </h3>
                  <p> { project.frontmatter.alias }</p>
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
query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
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