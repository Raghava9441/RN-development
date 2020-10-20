import React, { useState, useEffect } from "react";
import { AppBar, Button, Menu, MenuItem } from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logocontainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabcontainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuitem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  
  const [anchorEl, setanchorEl] = useState(null);
  const [openMenu, setopenMenu] = useState(false);
  

  const handlechange = (e, newvalue) => {
    props.setvalue(newvalue);
  };
  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
    setopenMenu(true);
  };
  const handleMuenuItemClick = (e, i) => {
    setanchorEl(null);
    setopenMenu(false);
    props.setSelectedIndex(i);
  };
  const handleClose = () => {
    setanchorEl(null);
    setopenMenu(false);
  };
  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "IOS/Android App Development", link: "/mobileapps" },
    { name: "Website Development", link: "website" },
  ];
  const routes = [{name:"Home",link:"/"}]

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (props.value !== 0) {
          props.setvalue(0);
        }
        break;
      case "/services":
        if (props.value !== 1) {
          props.setvalue(1);
          props.setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (props.value !== 1) {
          props.setvalue(1);
          props.setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (props.value !== 1) {
          props.setvalue(1);
          props.setSelectedIndex(2);
        }
        break;
      case "/website":
        if (props.value !== 1) {
          props.setvalue(1);
          props.setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (props.value !== 2) {
          props.setvalue(2);
        }
        break;
      case "/about":
        if (props.value !== 3) {
          props.setvalue(3);
        }
        break;
      case "/contact":
        if (props.value !== 4) {
          props.setvalue(4);
        }
        break;
      case "/estimate":
        if (props.value !== 5) {
          props.setvalue(5);
        }
        break;
        case "/estimate":
          props.setvalue(5);
          break
      default:
        break;
    }
  }, [props.value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        className={classes.tabcontainer}
        onChange={handlechange}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
          onMouseOver={(event) => {
            handleClick(event);
          }}
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick = {()=> props.setvalue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option},${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuitem }}
            onClick={(event) => {
              handleMuenuItemClick(event, i);
              props.setvalue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setvalue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={props.value === 0}
          >
            <ListItemText
              className={
                props.value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setvalue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={props.value === 1}
          >
            <ListItemText
              className={
                props.value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setvalue(2);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={props.value === 2}
          >
            <ListItemText
              className={
                props.value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              The revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setvalue(3);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={props.value === 3}
          >
            <ListItemText
              className={
                props.value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setvalue(4);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={props.value === 4}
          >
            <ListItemText
              className={
                props.value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setvalue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
            selected={props.value === 5}
          >
            <ListItemText
              className={
                props.value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        aria-label=""
        onClick={() => setOpenDrawer(!openDrawer)}
        dissableRipple
        className={classes.drawerContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className = {classes.appbar}>
          <ToolBar disableGutters>
            <Button
              className={classes.logocontainer}
              disableRipple
              component={Link}
              to="/"
              onClick={() => {
                props.setvalue(0);
              }}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>

            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
