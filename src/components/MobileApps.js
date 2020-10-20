import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import Lottie from "react-lottie";

import integrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

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
  itemContainer: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "40em",
  },
}));
export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      {/* first section  start*/}
      <Grid
        item
        container
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
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
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              IOS/Android Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Mobile Apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              What ever you what an app for your customers,employess,or myselfWe
              can build cross-plat form natives solutions for any part of your
              businesw process.This opens you up to a hole new world of
              posibilities by taking advantage of phone ferures link the camera,
              GPS,push notifications,and more{" "}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Convenience.Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/Website"
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
      {/* second section start */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant="h4">
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
            >
              Our technology enable an innate interconnection between web and
              mobile appliction,putting everything you need right in one
              convenient place.{" "}
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant="body1"
            >
              This allow you to extend your rech,reinvent interactions,and
              develop a stronger relationship with your users then ever before{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM ? "center" : "right"} variant="h4">
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM ? "center" : "right"} variant="body1">
              Our cutting edge development process allow us to create apps for
              iphone,android and tablets-All the thesame time
            </Typography>
            <Typography align={matchesSM ? "center" : "right"} variant="body1">
              This significantly reduce costs and create a more unified brand
              experiance across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* second section  end*/}
      {/* third section start */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="ter-one of sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="swiss army knife" />
          </Grid>
        </Grid>
      </Grid>
      {/* third section end */}
      {/* forth section start */}
      <Grid item>
        <CallToAction setValue={props.setvalue} />
      </Grid>
      {/* forth section end */}
    </Grid>
  );
}
