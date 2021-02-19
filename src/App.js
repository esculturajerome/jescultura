import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import GetToKnowMe from "./pages/GetToKnowMe";
import ProjectPage from "./pages/ProjectPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import "./components/work-grid.css";
import "./components/sidebar.css";
import "./components/responsive.css";
import "./components/project.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    const NoMatch = ({ location }) => (
      <div>
        <h1>Ooops!</h1>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
        <div className="row">
          <div className="end-page">
            <div className="col-sm-3">
              <Link to="/" className="projects-navigation previous-project">
                <div className="arrow arrow-left">
                  <p>Back</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="global-outer">
        <div className="global-inner">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gettoknowme" component={GetToKnowMe} />
              <Route path="/project/:name/" component={ProjectPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
