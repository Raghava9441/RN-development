import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden"
import Avatar from "@material-ui/core/Avatar";

import history from "../assets/history.svg";
import profile from "../assets/raghava.png";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import img from "../assets/img1.jpg";



import CallToAction from "./ui/CallToAction"

const useStyles = makeStyles((theme) => ({
  missionContainer: {
    fontFamily: "italic",
    fontWeight: "300",
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar:{
      height:"25em",
      width:"25em",
      [theme.breakpoints.down("sm")]:{
          height:"20em",
          width:"20em",
          height:300,
          width:300,
      }
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      {/* first section start */}
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </Grid>
      {/* first section end */}
      {/* second section start */}
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h4"
          align="center"
          className={classes.missionContainer}
          style={{ marginTop: "3em" }}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      {/* second section end */}
      {/* third section start */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        justify="space-around"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                variant="h2"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontFamily: "italic" }}
                align={matchesMD ? "center" : undefined}
              >
                we are the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center">
            <Grid item lg>
              <img
                src={history}
                alt=" quel pen "
                style={{ maxHeight: matchesMD ? 200 : "22em" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* third section end */}
      {/* forth section start */}
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Ragahava Reddy, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 19 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src={img}
                alt="yearbook page about founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from one of my favorate yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src={puppy}
                alt="grey spotted puppy"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setvalue} />
      </Grid>
    </Grid>
  );
}
