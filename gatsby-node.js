const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

let s = `
    {
      portifolio: allMdx(
        filter: {fileAbsolutePath: {regex: "/content/portifolio/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMMM DD, YYYY")
              categorie
              image
              cover_image
              video
              text_1
              youtube
              image_1
              text_2
              image_2
              image_3
              text_3
              image_4
              image_5
              text_4
              image_6
              text_5
              image_7
              image_8
              image_9
              image_10
              image_11
              image_12
              image_13
              image_14
              image_15
              image_16
              image_17
              image_18
              image_19
              image_20
              image_21
              image_22
              image_23
              image_24
              image_25
              image_26
              text_6
              text_7
              testimonial
              author
              role
            }
          }
        }
      }
      news: allMdx(
        filter: {fileAbsolutePath: {regex: "/content/news/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD/M/YYYY")
              title
              description
              image
              postType
              quote
              author
              type
            }
          }
        }
      }
    }
  `

const createNewsPages = (result, createPage) => {
  const newsTemplate = path.resolve(`./src/templates/news-post.tsx`)
  const news = result.data.news.edges
  news.forEach((post, index) => {
    const previous = index === news.length - 1 ? null : news[index + 1].node
    const next = index === 0 ? null : news[index - 1].node
    createPage({
      path: `${post.node.fields.slug}`,
      component: newsTemplate,
      context: {
        news,
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

const createPortifolio = (result, createPage) => {
  const newsTemplate = path.resolve(`./src/templates/portifolio-post.tsx`)
  const projects = result.data.portifolio.edges
  projects.forEach((post, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node
    createPage({
      path: `${post.node.fields.slug}`,
      component: newsTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(s).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    createPortifolio(result, createPage)
    createNewsPages(result, createPage)
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter implements Node {
      name: String
      author: String
      role: String
      testimonial: String
      author_image: String
      description: String
      image: String
      text_1: String
      text_2: String
      text_3: String
      text_4: String
      text_5: String
      text_6: String
      image_1: String
      image_2: String
      image_3: String
      image_4: String
      image_5: String
      image_6: String
      image_7: String
      image_8: String
      image_9: String
      image_10: String
      image_11: String
      image_12: String
      image_13: String
      image_14: String
      image_15: String
      image_16: String
      image_17: String
      image_18: String
      image_19: String
      image_20: String
      image_21: String
      image_22: String
    }
  `
  createTypes(typeDefs)
}
