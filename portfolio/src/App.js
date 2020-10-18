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
    <Router  basename={process.env.PUBLIC_URL}>
      <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} /> */}
          <Route path="/">
            <Home />
          </Route>
          <Route path="/port">
            <Portfolio />
          </Route>
          <Route path="/res">
            <Resume />
          </Route>
          <Route path="/cont">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
