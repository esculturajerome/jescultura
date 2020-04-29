import React from 'react';
import { Link } from 'react-router-dom';

const WorkList = ({ workProject }) => {
  return (
      <div>
        <ul>
          {workProject.map(work => {
            return work.workID !== '' ? (
              <li key={work.workID}>
                <a className="works-item" href={work.workLink} rel="noopener noreferrer" target="_blank">
                  {work.workName}
                </a>
              </li>
            ) :  null;
          })}
       </ul>
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
  );
};

export default WorkList;
