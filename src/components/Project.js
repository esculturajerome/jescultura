import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
  render() {
    const { id, name, desc, img } = this.props.project;
    return (
      <Link className="works-item" to={`/project/${id}`}>
        <div className="picture">
          <div className="content">
            <div className="text">
              <h2>{name}</h2>
              <ul>
                <li>{desc}</li>
              </ul>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </Link>
    );
  }
}

export default Project;
