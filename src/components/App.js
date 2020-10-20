import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Website from "./Website";
import Revolution from "./Revolution";
import About from "./About";
import Contact from "./Contact";
import Estimate from "./Estimate";

function App() {
  const [value, setvalue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setvalue={setvalue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setvalue={setvalue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/Services"
            render={(props) => (
              <Services
                {...props}
                setvalue={setvalue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setvalue={setvalue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <MobileApps
                {...props}
                setvalue={setvalue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/Website"
            render={(props) => (
              <Website
                {...props}
                setvalue={setvalue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/Revolution"
            render={(props) => (
              <Revolution
                {...props}
                setvalue={setvalue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/About"
            render={(props) => <About {...props} setvalue={setvalue} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} setvalue={setvalue} />}
          />
          <Route
            exact
            path="/estimate"
            render={(props)=><Estimate setvalue={setvalue}/>}
          />
        </Switch>
        <Footer
          value={value}
          setvalue={setvalue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
