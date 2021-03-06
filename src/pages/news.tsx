import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { GlobalPageTitle } from "components/GlobalPageTitle/globalTitle"
import { NewsPageList } from "components/NewsPage/newsPageList"
import { BlogQueryQuery } from "global"
import "components/NewsPage/index.css"

const News = (props: { data?: BlogQueryQuery }): React.ReactElement => {
  const { data } = props
  const { t } = useTranslation()
  const news = data?.allMdx.edges
  return (
    <React.Fragment>
      <GlobalPageTitle label={t("news")} />
      <NewsPageList news={news} />
    </React.Fragment>
  )
}

export default News

export const pageQuery = graphql`
  query NewsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/news/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/M/YYYY")
            title
            description
            image
            type
            postType
            quote
          }
        }
      }
    }
  }
`
