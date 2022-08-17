const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Teammates {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                    slug
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({ 
            path: '/teammates/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/teammate-details.js'),
            context: { slug: node.frontmatter.slug }
         })
        
    });
}