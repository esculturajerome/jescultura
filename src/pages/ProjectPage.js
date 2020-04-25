import React, { Component } from 'react';
import SidebarProject from './../components/SidebarProject';
import { Spring } from 'react-spring/renderprops';
import './../components/project.css';
import { Link } from 'react-router-dom';

class ProjectPage extends Component {
  state = {
    id: null,
    dateCreated: null,
    name: null,
    category: null,
    url: null,
    desc1: null,
    desc2: null,
    desc3: null,
    coverImage: null,
    projectImg1: null,
    projectImg2: null,
    projectImg3: null,
    projectImg4: null,
    projectImg5: null,
    projectImg6: null,
  };

  componentDidMount() {
    const { projID } = this.props.location.state;
    const { projDateCreated } = this.props.location.state;
    const { projName } = this.props.location.state;
    const { projCategory } = this.props.location.state;
    const { projUrl } = this.props.location.state;
    const { projDesc1 } = this.props.location.state;
    const { projDesc2 } = this.props.location.state;
    const { projDesc3 } = this.props.location.state;
    const { projCoverImage } = this.props.location.state;
    const { projProjectImg1 } = this.props.location.state;
    const { projProjectImg2 } = this.props.location.state;
    const { projProjectImg3 } = this.props.location.state;
    const { projProjectImg4 } = this.props.location.state;
    const { projProjectImg5 } = this.props.location.state;
    const { projProjectImg6 } = this.props.location.state;
    // console.log(this.props.location.pathname);

    this.setState({
      id: projID,
      dateCreated: projDateCreated,
      name: projName,
      category: projCategory,
      url: projUrl,
      desc1: projDesc1,
      desc2: projDesc2,
      desc3: projDesc3,
      coverImage: projCoverImage,
      projectImg1: projProjectImg1,
      projectImg2: projProjectImg2,
      projectImg3: projProjectImg3,
      projectImg4: projProjectImg4,
      projectImg5: projProjectImg5,
      projectImg6: projProjectImg6,
    });

  }

  render() {
    return (
      <div>
        <SidebarProject />
          <Spring key={ this.state.id }
          from={{ opacity: 0, marginRight: -70 }}
          to={{ opacity: 1, marginRight: 0 }}
          >
            {props => (
              <div id="project-page" style={props}>
                <div id="main">
                  <div className="main-outer">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="gallery">
                            {(() => {
                              if (this.state.projectImg6 !== 'undefined') {
                                return (
                                  <div>
                                    <img src={ this.state.projectImg1 } alt="" />
                                    <img src={ this.state.projectImg2 } alt="" />
                                    <img src={ this.state.projectImg3 } alt="" />
                                    <img src={ this.state.projectImg4 } alt="" />
                                    <img src={ this.state.projectImg5 } alt="" />
                                    <img src={ this.state.projectImg6 } alt="" />
                                  </div>
                                );
                              } else if (this.state.projectImg5 !== 'undefined') {
                                return (
                                  <div>
                                    <img src={ this.state.projectImg1 } alt="" />
                                    <img src={ this.state.projectImg2 } alt="" />
                                    <img src={ this.state.projectImg3 } alt="" />
                                    <img src={ this.state.projectImg4 } alt="" />
                                    <img src={ this.state.projectImg5 } alt="" />
                                  </div>
                                );
                              } else if (this.state.projectImg4 !== 'undefined') {
                                return (
                                  <div>
                                    <img src={ this.state.projectImg1 } alt="" />
                                    <img src={ this.state.projectImg2 } alt="" />
                                    <img src={ this.state.projectImg3 } alt="" />
                                    <img src={ this.state.projectImg4 } alt="" />
                                  </div>
                                );
                              } else if (this.state.projectImg3 !== 'undefined') {
                                return (
                                  <div>
                                    <img src={ this.state.projectImg1 } alt="" />
                                    <img src={ this.state.projectImg2 } alt="" />
                                    <img src={ this.state.projectImg3 } alt="" />
                                  </div>
                                );
                              } else if (this.state.projectImg2 !== 'undefined') {
                                return (
                                  <div>
                                    <img src={ this.state.projectImg1 } alt="" />
                                    <img src={ this.state.projectImg2 } alt="" />
                                  </div>
                                );
                              } else {
                                return (
                                  <div>
                                    <img src={ this.state.projectImg1 } alt="" />
                                  </div>
                                );
                              }
                            })()}
                          </div>
                        </div>
                        <div className="col-md-6 offset-1">
                          <div className="description">
                            <h1>{ this.state.name }</h1>
                            <ul className="categories">
                              <li>{ this.state.category }</li>
                            </ul>
                            {(() => {
                              if (this.state.desc3 !== 'undefined') {
                                return (
                                  <div>
                                    <p>{ this.state.desc1 }</p>
                                    <p>{ this.state.desc2 }</p>
                                    <p>{ this.state.desc3 }</p>
                                  </div>
                                );
                              } else if (this.state.desc2 !== 'undefined') {
                                return (
                                  <div>
                                    <p> { this.state.desc1 } </p>
                                    <p> { this.state.desc2 } </p>
                                  </div>
                                );
                              } else {
                                return (
                                  <div>
                                    <p> { this.state.desc1 } </p>
                                  </div>
                                );
                              }
                            })()}
                            <div className="row">
                              <div className="col-md-6">
                                <h5 className="subtitle">Date</h5>
                                <p>{ this.state.dateCreated }.</p>
                              </div>
                                {(() => {
                                  if (this.state.url !== '') {
                                    return (
                                      <div className="col-md-6">
                                        <h5 className="subtitle">Link</h5>
                                        <a href={ this.state.url } rel="noopener noreferrer" target="_blank">{ this.state.name } { this.state.category }</a>
                                      </div>
                                    );
                                  } else {
                                    return (
                                     null
                                   );
                                  }
                                })()}
                             </div>
                          </div>
                          <div className="row">
                            <div className="end-page">
                              <div className="col-sm-3">
                                <Link to="/" className="projects-navigation previous-project">
                                    <div className="arrow arrow-left"></div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Spring>
      </div>
    );
  }
}

export default ProjectPage;
