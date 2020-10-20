import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";


import CallToAction from "./ui/CallToAction"

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "40em",
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));
export default function Website(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      {/* first section start*/}
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Having website is necessary in today's business world they give
              you one central,public location to let people know who you
              are,what you do,and why you are best at it
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Form simply having your hours posted to having a full fledged
              online store,making your self accessible to users online drives
              groth and eanables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="Forward to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/* first section end*/}
      {/* second section start*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" Analytics align="center">
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img src={analytics} alt="" style={{ marginLeft: "-2.75em" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Knowledge is power and data is 21'st century gold.Analyzing this
            data can reveal hidden patterns and trends in your
            business,empowering to make smatter decisions with measurable
            efforts.
          </Typography>
        </Grid>
      </Grid>
      {/* second section end*/}
      {/* third section start*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align="center">
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            It's no secret that people like to shop online
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            In 2017 over $2.3 trillian was spent in E-commerce,and its time for
            your slice of that chat.
          </Typography>
        </Grid>
      </Grid>
      {/* third section end*/}
      {/* forth section start*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align="center">
                Out Reach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography
            variant="body1"
            style={{ marginLeft: "1em" }}
            align={matchesSM ? "center" : undefined}
          >
            Draw people in with dazzling website. Showing of your product online
            is a great way to help customers decide what's right for them before
            visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/* Forth section end*/}
      {/* fifth section start*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: "10em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align="center" align="center">
                SEO
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            How aften have ever been to the second page of google result ?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            if you'r like us probably never.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Customers don't go eighter, so we make sure your website is designed
            to end up on top.
          </Typography>
        </Grid>
      </Grid>
      {/* Fifth section end*/}
      {/* six section start*/}
      <Grid item>
        <CallToAction setValue={props.setvalue} />
      </Grid>
      {/* six section end*/}
    </Grid>
  );
}
