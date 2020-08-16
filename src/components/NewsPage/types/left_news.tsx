import { Link } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { ExpandTExt } from "components/NewsPage/components/expand_text"
import { SlugType } from "components/NewsPage/types"
import { SitePageContextNewsNodeFrontmatter } from "global"
import { makeStyles } from "@material-ui/core/styles"

interface Props {
  current: SitePageContextNewsNodeFrontmatter & SlugType
}
const useStyles = makeStyles(() => ({
  style: {
    width: "45%",
  },
  lag: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

export const LeftNewsComponent = ({
  current: { description, image, slug, title, type },
}: Props): React.ReactElement | null => {
  const classes = useStyles()
  const imageSrc = image || ""
  return type === "LEFT" ? (
    <div>
      <Link
        className={"global-news-left"}
        style={{ height: "100%", textDecoration: "none", minHeight: 300 }}
        to={slug || ""}
      >
        <div className={classes.lag}>
          <div
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
            className={classes.style}
          >
            <ExpandTExt
              date={type}
              title={"cesco dominator" + title}
              description={description || ""}
            />
          </div>
          <div className={classes.style} />
        </div>
      </Link>
    </div>
  ) : null
}
