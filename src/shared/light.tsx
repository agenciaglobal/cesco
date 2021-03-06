import { createMuiTheme } from "@material-ui/core"
import { LightMode } from "./theme"

export const lightOptions = {
  themeName: "light" as LightMode,
  palette: {
    primary: { main: "#FFF", contrastText: "#000" },
    secondary: { main: "#FFCC00" },
    background: {
      default: "#FFF",
      paper: "#FFF",
    },
  },
  custom: {
    grey1: "#333",
    grey2: "#F2F2F2",
    greyAlpha: "rgba(0, 0, 0, 0.6)",
    greyAlpha2: "rgba(255, 255, 255, 0.95)",
  },
  typography: {
    allVariants: {
      color: "#000",
      fontFamily: "GSTwo",
    },
  },
}
export const lightTheme = createMuiTheme(lightOptions)
