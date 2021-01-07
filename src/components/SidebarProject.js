import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

class SidebarProject extends React.Component {
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <header id="sidebar">
              <div className="sidebar-inner">
                <Link to="/" className="logo smooth-leavess">
                  <img className="img-responsive" src="/logo.svg" alt="Logo" />
                </Link>
                <p className="intro">
                  A Minimalist tech enthusiast
                </p>
                <nav>
                  <ul>
                    <Spring
                      from={{ opacity: 0, marginRight: -70 }}
                      to={{ opacity: 1, marginRight: 0 }}
                    >
                      {(props) => (
                        <div style={props}>
                          <li>
                            <Link to="/">
                              <span>Personal Projects</span>
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/works">
                              <span>Work Projects</span>
                            </Link>
                          </li> */}
                          <li>
                            <Link to="/about">
                              <span>About</span>
                            </Link>
                          </li>
                        </div>
                      )}
                    </Spring>
                  </ul>
                </nav>
                <p className="copyright">escultura &copy; 2021</p>
              </div>
            </header>
          </div>
        )}
      </Spring>
    );
  }
}

export default SidebarProject;
