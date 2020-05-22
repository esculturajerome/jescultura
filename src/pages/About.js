import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

class About extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginRight: -70 }}
        to={{ opacity: 1, marginRight: 0 }}
      >
        {(props) => (
          <div id="about-page" style={props}>
            <main id="main">
              <div className="main-outer">
                <div className="container-fluid">
                  <div>
                    <div className="row">
                      <div className="col-md-4">
                        <Link to="/">
                          <img
                            src="img/about/Jerome Escultura.png"
                            alt=""
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <div className="col-md-8">
                        <div className="text">
                          <h1>Jerome Escultura</h1>
                          <p>
                            I am a full stack developer with a passion for
                            graphic and web design. With a great deal of
                            experience under my belt using web technologies like
                            Angular and React.js, I have contributed to the
                            development and maintenance of numerous websites
                            such as Canstar, Ogroup,The Noel Team, and Chen
                            Agency to name a few.
                          </p>
                          <p>
                            I believe I have strong leadership qualities and I
                            am also a good follower. By participating in various
                            youth programs for an international non-government
                            organization, I have developed an outstanding
                            communication and management skills.{" "}
                          </p>
                          <p>
                            {" "}
                            See my recents
                            <Link to="/"> Works</Link>
                          </p>
                        </div>
                        <div className="widgets-block">
                          <div className="widget">
                            <p className="title">Contact</p>
                            <ul>
                              <li>
                                Email:{" "}
                                <a
                                  href="mailto:esculturajerome@jescultura.com"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  esculturajerome@jescultura.com
                                </a>
                                <br />
                                Github:{" "}
                                <a
                                  href="https://github.com/esculturajerome"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  esculturajerome
                                </a>
                                <br />
                                LinkedIn:{" "}
                                <a
                                  href="https://www.linkedin.com/in/jeromeescultura/"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Jerome Escultura
                                </a>{" "}
                                <br />
                                Whatsapp:{" "}
                                <a
                                  href="https://api.whatsapp.com/send?phone=+639566754237"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  +639566754237
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-container">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>Experience</h2>
                      </div>
                    </div>
                    <div className="row experience">
                      <div className="col-md-3">
                        <h4>
                          Full Stack Developer
                          <p>August 2019 - current </p>
                          <p>
                            <a
                              href="https://www.august99.com/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              August 99 Inc. - Canstar Division
                            </a>
                          </p>
                        </h4>
                        <ul>
                          <li>
                            Develop fronted website architecture and design user
                            interactions on web pages.
                          </li>
                          <li>
                            Ensure cross-platform optimization for mobile
                            phones.
                          </li>
                          <li>Design and develop APIs.</li>
                          <li>
                            Develop in an Agile environment (SCRUM) - Be Agile,
                            Be Lean, MVP vs Perfection.
                          </li>
                          <li>
                            End to end web development process – Setup dev
                            environment, code – Unit testing.
                          </li>
                          <li>
                            Develop new features and provide maintenance and
                            support services on existing code.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h4>
                          Front-end Web Developer
                          <p>July 2018 - August 2019 </p>
                          <p>
                            <a
                              href="https://www.august99.com/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              August 99 Inc. - Agent Image Division{" "}
                            </a>
                          </p>
                        </h4>
                        <ul>
                          <li>
                            Theme creation involving converting designs into
                            modular templates that can be readily used in a
                            project.
                          </li>
                          <li>Database design based on client requirements</li>
                          <li>
                            Custom plugin development for integrating various
                            APIs.
                          </li>
                          <li>
                            Ensuring site compatibility across required
                            browsers.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h4>
                          Computer Instructor
                          <p>April 2017 - June 2017 </p>
                          <p>
                            <a
                              href="https://www.children.org/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Children International
                            </a>
                          </p>
                        </h4>
                        <ul>
                          <li>
                            Design, facilitate, and teach the computer
                            instruction component and prepare execute lesson
                            plans, assigning tasks, and evaluating student work
                            and progress.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h4>
                          VBA Specialist - Intern
                          <p>June 2017 - November 2017 </p>
                          <p>
                            <a
                              href="http://manulife-global-resourcing.force.com/manila/Manila---About-MBPS-Manila-"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Manulife Business Processing Services
                            </a>
                          </p>
                        </h4>
                        <ul>
                          <li>
                            Maintain and support existing systems, tools, and
                            macros.
                          </li>
                          <li>
                            Develop interfaces for departmental SharePoint
                            sites.
                          </li>
                          <li>
                            Ability to manage multiple tasks, analytic and
                            critical thinking skills.
                          </li>
                          <li>
                            Organize large amounts of raw data to ease analysis
                            for project managers and management.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="about-container">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="img/about/youth.png"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="col-md-5 offset-1">
                        <div className="text">
                          <h2>Volunteer Works</h2>
                          <p>
                            Children International is an International
                            Non-government organization aim to create a world
                            without poverty where every child, family and
                            community is connected, productive and thriving.
                          </p>
                          <ul className="links">
                            <li>
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.children.org/"
                              >
                                Children International
                              </a>
                            </li>
                            <li>
                              <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.peacecorps.gov/philippines/"
                              >
                                Peace Corps in Philippines
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h4>Agency Youth Council President</h4>
                        <p>
                          Oversees the duties and functions for both Agency
                          Level and Center level Youth Council. Serves as the
                          head of the Core Group in{" "}
                          <a
                            href="https://www.children.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Children International
                          </a>
                          .
                        </p>
                        <p>
                          Represents the Youth Council and its programs by
                          serving as member of the Agency’s Board of Trustees
                          (BOT) during my term of office.
                        </p>
                        <p>
                          Actively presides meetings and prepares agenda for the
                          Core Group to be disseminated through the Agency Youth
                          Council Vice President for Monitoring and Evaluation.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h4>Agency Youth Council Vice President</h4>
                        <p>
                          Responsible in working closely with Agency Youth
                          Council and Youth Program Coordinator In the planning
                          and preparation of the needed Council funds to be
                          allotted to project implementation in{" "}
                          <a
                            href="https://www.children.org/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Children International
                          </a>
                          .
                        </p>
                        <p>
                          Keeps all financial records (liquidations) and other
                          documents properly filed for accounting and other
                          auditing purposes to be submitted to specific Field
                          Officer and to the Youth Program Coordinator.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="end-page">
                        <div className="col-sm-3">
                          <Link
                            to="/"
                            className="projects-navigation previous-project"
                          >
                            <div className="arrow arrow-left"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </Spring>
    );
  }
}
export default About;
