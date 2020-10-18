import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import "./style.css";
import Header from "./components/Header"


function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
