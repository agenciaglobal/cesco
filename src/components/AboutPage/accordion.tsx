import { Box, Typography, useTheme, Theme } from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { makeStyles } from "@material-ui/core/styles"
import * as React from "react"
import { accordionData } from "./accordion_date"

const useStylesAccordion = makeStyles((theme) => ({
  heading: {
    fontSize: "16px",
    "@media (min-width:600px)": {
      fontSize: "22px",
    },
    fontWeight: theme.typography.fontWeightRegular,
  },
  style: {
    fontFamily: "GSThree",
    textAlign: "center",
    fontSize: "24px",
    lineHeight: "30px",
    paddingTop: 100,
    "@media (min-width:600px)": {
      fontSize: "50px",
      textAlign: "left",
      lineHeight: "50px",
    },
  },
  div: {
    width: "100%",
    paddingBottom: 40,
    paddingTop: 30,
  },
  details: {
    "@media (min-width:600px)": {
      padding: "0px 56px",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  ul: {
    margin: 0,
    padding: 0,
    "@media (min-width:600px)": {
      transform: "translateY(-54px)",
      textAlign: "right",
    },
  },
  li: {
    fontFamily: "GSTwo",
    fontWeight: 600,
    lineHeight: "2.2em",
    fontSize: "14px",
    listStyle: "none",
    "@media (min-width:600px)": {
      fontSize: "16px",
    },
  },
}))

function SvgIconccordion(props: { theme: Theme }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        stroke={props.theme.palette.primary.contrastText}
      />
      <rect
        x="7"
        y="3"
        width="2"
        height="10"
        fill={props.theme.palette.primary.contrastText}
      />
      <rect
        x="3"
        y="7"
        width="10"
        height="2"
        fill={props.theme.palette.primary.contrastText}
      />
    </svg>
  )
}

function NewComponent(props: {
  current: number
  index: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  accordion: { text: string[]; title: string }
}) {
  const theme = useTheme()
  const classes = useStylesAccordion()
  const expanded = props.current === props.index
  return (
    <Accordion
      expanded={expanded}
      onClick={() => props.setCurrent(expanded ? -1 : props.index)}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <svg width="16" height="20">
              <path
                d="M8.66669 3.28716C8.44895 3.25688 8.22637 3.24121 8.00002 3.24121C7.77367 3.24121 7.55109 3.25688 7.33335 3.28716V0.677323C7.55293 0.658083 7.77529 0.648254 8.00002 0.648254C8.22475 0.648254 8.44711 0.658083 8.66669 0.677323V3.28716ZM4.66669 7.77888C4.66669 9.56895 6.15907 11.0201 8.00002 11.0201C9.84097 11.0201 11.3334 9.56895 11.3334 7.77888C11.3334 5.98882 9.84097 4.53769 8.00002 4.53769C6.15907 4.53769 4.66669 5.98882 4.66669 7.77888ZM10 7.77888C10 8.85292 9.10459 9.7236 8.00002 9.7236C6.89545 9.7236 6.00002 8.85292 6.00002 7.77888C6.00002 6.70485 6.89545 5.83417 8.00002 5.83417C9.10459 5.83417 10 6.70485 10 7.77888ZM8.66669 14.8804V12.2706C8.44895 12.3009 8.22637 12.3166 8.00002 12.3166C7.77367 12.3166 7.55109 12.3009 7.33335 12.2706V14.8804C7.55293 14.8997 7.77529 14.9095 8.00002 14.9095C8.22475 14.9095 8.44711 14.8997 8.66669 14.8804ZM12.6194 7.13065H15.3034C15.3232 7.34415 15.3333 7.56037 15.3333 7.77888C15.3333 7.9974 15.3232 8.21362 15.3034 8.42712H12.6194C12.6506 8.21541 12.6667 7.99898 12.6667 7.77888C12.6667 7.55879 12.6506 7.34236 12.6194 7.13065ZM3.33335 7.77888C3.33335 7.55879 3.34947 7.34236 3.38061 7.13065H0.696582C0.676795 7.34415 0.666687 7.56037 0.666687 7.77888C0.666687 7.9974 0.676795 8.21362 0.696582 8.42712H3.38061C3.34947 8.21541 3.33335 7.99898 3.33335 7.77888ZM10.7948 4.14461L12.6927 2.29914C13.0347 2.57638 13.3504 2.88332 13.6355 3.21589L11.7376 5.06136C11.4699 4.71384 11.1522 4.40488 10.7948 4.14461ZM2.3645 3.21589L4.26242 5.06136C4.5301 4.71384 4.84783 4.40488 5.20523 4.14461L3.30731 2.29914C2.96528 2.57638 2.64962 2.88332 2.3645 3.21589ZM11.7376 10.4964L13.6355 12.3419C13.3504 12.6744 13.0347 12.9814 12.6927 13.2586L10.7948 11.4132C11.1522 11.1529 11.4699 10.8439 11.7376 10.4964ZM3.30731 13.2586L5.20523 11.4132C4.84783 11.1529 4.5301 10.8439 4.26242 10.4964L2.3645 12.3419C2.64962 12.6744 2.96528 12.9814 3.30731 13.2586Z"
                fill={"black"}
              />
            </svg>
          ) : (
            <SvgIconccordion theme={theme} />
          )
        }
      >
        <Typography className={classes.heading}>
          {props.accordion.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <ul className={classes.ul}>
          {props.accordion.text.map((item, index) => (
            <li key={index} className={classes.li}>
              {item}
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
}

export const AboutAccordion = (): React.ReactElement => {
  const classes = useStylesAccordion()
  const [current, setCurrent] = React.useState(-1)
  return (
    <React.Fragment>
      <Box lineHeight={3}>
        <Typography className={classes.style}>NOSSAS CAPACIDADES</Typography>
      </Box>
      <div className={classes.div}>
        {accordionData.map((accordion, index) => (
          <NewComponent
            index={index}
            current={current}
            setCurrent={setCurrent}
            key={index}
            accordion={accordion}
          />
        ))}
      </div>
    </React.Fragment>
  )
}
