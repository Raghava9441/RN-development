import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import mobileAppsIcon from "../assets/mobileIcon.svg";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  spacialText: {
    fontFamily: "pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  serviceblock: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      padding: 25,
    },
  },
}));
export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          align={matchesSM ? "center" : undefined}
          style={{ marginLeft: matchesSM ? 0 : "5em",marginTop:matchesSM?"1em":"2em" }}
          gutterBottom
          variant="h2"
        >
          Services
        </Typography>
      </Grid>
      {/* android/IOS development */}
      <Grid
        Item
        className={classes.serviceblock}
        style={{ marginTop: matchesSM ? "1em" : undefined }}
      >
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setvalue(1);
                props.setSelectedIndex(2);
              }}
              className={classes.learnButton}
              variant="outlined"
              color="default"
            >
              <span style={{ marginRight: 10 }}>LearnMore</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt=""
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* custom software development  */}
      <Grid
        Item
        className={classes.serviceblock}
        style={{ marginTop: matchesSM ? "8em" : "12em" }}
      >
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Enargy.Save Time.Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital solution.From investigation to{" "}
              <span className={classes.spacialText}>Celebration</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              onClick={() => {
                props.setvalue(1);
                props.setSelectedIndex(1);
              }}
              className={classes.learnButton}
              variant="outlined"
              color="default"
            >
              <span style={{ marginRight: 10 }}>LearnMore</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={customSoftwareIcon} alt="" />
          </Grid>
        </Grid>
      </Grid>
      {/* website development */}
      <Grid
        Item
        className={classes.serviceblock}
        style={{ marginTop: matchesSM ? "8em" : "12em" }}
      >
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/website"
              onClick={() => {
                props.setvalue(1);
                props.setSelectedIndex(3);
              }}
              className={classes.learnButton}
              variant="outlined"
              color="default"
            >
              <span style={{ marginRight: 10 }}>LearnMore</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt=""
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
