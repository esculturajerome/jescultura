import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class SidebarProject extends React.Component{
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        >
        { props => (
          <div style={props}>
            <header id="sidebar">
              <div className="sidebar-inner">
                <Link to="/" className="logo smooth-leavess">
                  <img className="img-responsive" src="/logo192.png" alt="Jerome Escultura Profile" />
                </Link>
                <p className="intro">A Minimalist tech enthusiast from Manila</p>
                <nav>
                  <ul>
                    <Spring
                    from={{ opacity: 0, marginRight: -70 }}
                    to={{ opacity: 1, marginRight: 0 }}
                    >
                      {props => (
                        <div style={props}>
                          <li><Link to="/"  ><span>Work</span></Link></li>
                          <li><Link to="/about"  ><span>About</span></Link></li>

                        </div>
                      )}
                    </Spring>
                  </ul>
                </nav>
                <p className="copyright">escultura &copy; 2020.</p>
              </div>
            </header>
          </div>
        )}
      </Spring>
    );
  }
}

export default SidebarProject;
