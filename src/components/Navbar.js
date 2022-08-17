import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query getLogo {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            )
        }
      }
    }
  `)

  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <nav>
        <div className='container navbar'>
            <GatsbyImage className='logo' image={image} alt="Logo" />
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Justice Friends</Link>
            </div>
        </div>
    </nav>
  )
}
