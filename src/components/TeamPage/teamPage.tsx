import { useTranslation } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { GlobalPageTitle } from "components/GlobalPageTitle/globalTitle"
import { GridEmployees } from "./grid"
import "./team.css"
import { Employees } from "./types"

interface Props {
  employees: Employees
}

export const TeamPage = ({ employees }: Props): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <GlobalPageTitle label={t("team")} />
      <GridEmployees employees={employees} />
    </React.Fragment>
  )
}
