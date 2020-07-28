import { Container } from "@material-ui/core"
import * as React from "react"
import * as classNames from "classnames"
import { Waypoint } from "react-waypoint"
import { LayoutHeader } from "../components/LayoutHeader/layoutHeader"
import { LayoutHeaderMobile } from "../components/LayoutHeader/layoutHeaderMobile"
import LeftDrawer from "../components/LayoutLeftDrawer/leftDrawer"
import RightDrawer from "../components/LayoutRightDrawer/rightDrawer"
import { useStyles } from "./styles"

interface Props {
  uri: string
  lightMode: "light" | "dark"
  toggleLightMode: () => void
  children: React.ReactElement
}

export const ActualLayout = ({
  children,
  lightMode,
  toggleLightMode,
  uri,
}: Props): React.ReactElement => {
  const [scrolled, setScrolled] = React.useState(false)
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <RightDrawer scrolled={scrolled} uri={uri} />
      <LeftDrawer scrolled={scrolled} uri={uri} />
      <LayoutHeaderMobile
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
      />
      <LayoutHeader
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
      />
      <Waypoint
        bottomOffset={-300}
        onEnter={() => setScrolled(false)}
        onLeave={() => setScrolled(true)}
      />
      <Container
        className={classNames(classes.root, { [classes.scrolled]: scrolled })}
      >
        {children}
      </Container>
      {/*<Footer />*/}
    </div>
  )
}
