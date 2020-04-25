import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

class Sidebar extends React.Component{
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
                  <img className="img-responsive" src="/img/profile.png" alt="Jerome Escultura Profile" />
                </Link>
                <p className="intro">A Minimalist tech enthusiast from Manila</p>
                <nav>
                  <ul>
                    <li><Link to="/"><span>Personal Projects</span></Link></li>
                    <li><Link to="/works"><span>Work Projects</span></Link></li>
                    <li><Link to="/about"><span>About</span></Link></li>
                  </ul>
                </nav>
                <div className="widgets-block">
                  <div className="widget twitter">
                    <p className="title">Contact</p>
                    <ul>
                      <li>Email: <a href="mailto:esculturajerome@jescultura.com" rel="noopener noreferrer" target="_blank">esculturajerome@jescultura.com</a><br/>
                        LinkedIn: <a href="https://www.linkedin.com/in/jeromeescultura/" rel="noopener noreferrer" target="_blank">Jerome Escultura</a> <br/>
                        Whatsapp: <a href="https://api.whatsapp.com/send?phone=+639566754237" rel="noopener noreferrer" target="_blank">+639566754237</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="copyright">escultura &copy; 2020.</p>
              </div>
            </header>
          </div>
        )}
      </Spring>
    );
  }
}

export default Sidebar;
