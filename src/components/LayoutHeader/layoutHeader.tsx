import { Hidden } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { LightMode } from "shared/theme"
import logoblack from "static/logo-black.png"
import logo from "static/logo-white.png"
import mapGlobal from "static/map.png"
import {
  LanguageSwitcher,
  SuporttedLanguages,
} from "components/LanguageSwitcher/LanguageSwitcher"
import { TabComponent } from "components/TabComponent/drawerItem"

interface Props {
  lightMode: LightMode
  uri: string
}

export const LayoutHeader = ({ lightMode, uri }: Props): React.ReactElement => {
  const { changeLanguage, language } = useI18next()
  const isContact = uri.includes("/contact")
  console.log(isContact)
  return (
    <Hidden smDown>
      <AppBar
        position="static"
        style={{
          zIndex: 222,
          height: isContact ? 400 : 155,
          backgroundImage: isContact ? `url(${mapGlobal})` : "unset",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            padding: "0px 120px",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ boxShadow: "none" }} to="/">
            <img
              src={lightMode === "light" ? logoblack : logo}
              alt="logo-black"
              style={{ margin: "32px 32px 0px 0px", height: 100 }}
            />
          </Link>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <ul
              style={{
                color: "#AAA",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                padding: 8,
              }}
            >
              <TabComponent page={"/"} uri={uri} label={"WORKS"} />
              <TabComponent page={"/about"} uri={uri} label={"ABOUT"} />
              <TabComponent page={"/news"} uri={uri} label={"NEWS"} />
              <TabComponent page={"/team"} uri={uri} label={"TEAM"} />
              <TabComponent page={"/clients"} uri={uri} label={"CLIENTES"} />
              <TabComponent page={"/contact"} uri={uri} label={"CONTACT"} />
              <br />
              <LanguageSwitcher
                language={language as SuporttedLanguages}
                changeLanguage={changeLanguage}
                style={{ paddingLeft: 24 }}
              />
            </ul>
            {/* <ThemeSwitch
              lightMode={lightMode}
              toggleLightMode={toggleLightMode}
            /> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}
