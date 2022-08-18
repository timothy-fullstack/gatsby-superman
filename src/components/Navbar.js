import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
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

  const [isOpen, setOpen] = useState(false)
  
  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? 'navbar-open' : 'navbar-close'}>
        <div className='container navbar'>
            <GatsbyImage className='logo' image={image} alt="Logo" />
            <div className={isOpen ? 'nav-links nav-open' : 'nav-links'}  >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/teammates">Justice Friends</Link>
            </div>
            <div className='menu-button' onClick={openMenu}>
              <div className={isOpen ? 'menu-bar open-1' : 'menu-bar'}></div>
              <div className={isOpen ? 'menu-bar open-2' : 'menu-bar'}></div>
              <div className={isOpen ? 'menu-bar open-3' : 'menu-bar'}></div>
            </div>
        </div>
    </nav>
  )
}


