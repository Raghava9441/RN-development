import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      color: "white",
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    estimate: {
      color: "white",
      fontFamily: "pacifico",
      textTransform: "none",
      fontSize: "1em",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "pacifico",

      fontSize: "2.5rem",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: `${arcBlue}`,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "raleway",
      color: `${arcBlue}`,
      lineHeight:1
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      color: `${arcGrey}`,
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rm",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1em",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});
