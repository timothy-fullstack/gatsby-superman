/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Superman',
    description: 'Web dev portfolio',
    copyright: 'This website is copyright 2022 Superman'
  }
}
