import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

import footerAdornment from "../../assets/Footer Adornment.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white  ",
    fontFamily: "arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  griditem: {
    margin: "3em",
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("xs")]: {
      width: "2.5em",
      height: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));
export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify="space-evenly"
          className={classes.mainContainer}
        >
          <Grid item className={classes.griditem}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setvalue(0)}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container dicrection="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  props.setvalue(1);
                  props.setSelectedIndex(0);
                }}
                to="/services"
              >
                Services
              </Grid>
            </Grid>
            <Grid container dicrection="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setvalue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
            </Grid>
            <Grid container dicrection="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setvalue(1);
                  props.setSelectedIndex(2);
                }}
              >
                IOS/Android Apps Development
              </Grid>
            </Grid>
            <Grid container dicrection="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/website"
                onClick={() => {
                  props.setvalue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setvalue(2)}
              >
                The Revolution
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setvalue(2)}
              >
                vision
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setvalue(2)}
              >
                Technology
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setvalue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setvalue(3)}
              >
                About US
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setvalue(3)}
              >
                History
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setvalue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.griditem}>
            <Grid continer direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => props.setvalue(4)}
              >
                Contact US
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src={footerAdornment}
        alt="footer img"
        className={classes.adornment}
      />
      <Grid
        container
        spacing={2}
        justify="flex-end"
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
