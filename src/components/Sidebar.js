import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import Contacts from "./contacts";

class Sidebar extends React.Component {
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <header id="sidebar">
              <div className="sidebar-inner">
                <Link to="/" className="logo smooth-leavess">
                  <img
                    className="img-responsive"
                    src="/img/profile.jpeg"
                    alt="Jerome Escultura Profile"
                  />
                </Link>
                <p className="intro">A Minimalist tech enthusiast.</p>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">
                        <span>Personal Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <span>About</span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/gettoknowme">
                        <span>Get to know me</span>
                      </Link>
                    </li> */}
                  </ul>
                </nav>
                <Contacts footer={"true"} />
              </div>
            </header>
          </div>
        )}
      </Spring>
    );
  }
}

export default Sidebar;
