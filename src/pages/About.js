import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import Experience from "../components/experience";
import Contacts from "../components/contacts";
import Tools from "../components/tools";

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
                            Angular and ReactJS, I have contributed to the
                            development and maintenance of numerous websites.
                          </p>
                          <p>
                            I believe I have strong leadership qualities and I
                            am also a good follower. By participating in various
                            youth programs for an international non-government
                            organization, I have developed an outstanding
                            communication and management skills.
                          </p>
                          <p>
                            See my recents
                            <Link to="/"> Works</Link>
                          </p>
                        </div>
                        <Contacts />
                      </div>
                    </div>
                  </div>
                  <Experience />
                  <Tools />
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
                                Children International Inc.
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
