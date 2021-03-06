import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => {
        const nameTrim = project.name.replace(/\s/g, "");

        return project.category !== "" ? (
          <div className="project" key={project.id}>
            {project.url !== "" ? (
              <Link
                className="works-item"
                key={project.id}
                to={{
                  pathname: `project/${nameTrim}`,
                  state: {
                    projID: `${project.id}`,
                    projDateCreated: `${project.dateCreated}`,
                    projName: `${project.name}`,
                    projCategory: `${project.category}`,
                    projUrl: `${project.url}`,
                    projDesc1: `${project.desc1}`,
                    projDesc2: `${project.desc2}`,
                    projDesc3: `${project.desc3}`,
                    projCoverImage: `${project.coverImage}`,
                    projProjectImg1: `${project.projectImg1}`,
                    projProjectImg2: `${project.projectImg2}`,
                    projProjectImg3: `${project.projectImg3}`,
                    projProjectImg4: `${project.projectImg4}`,
                    projProjectImg5: `${project.projectImg5}`,
                    projProjectImg6: `${project.projectImg6}`,
                  },
                }}
              >
                <div className="picture">
                  <div className="content">
                    <div className="text">
                      <h2>{project.name}</h2>
                      <ul>
                        <li>{project.category}</li>
                      </ul>
                    </div>
                  </div>
                  <img src={project.coverImage} alt=" " />
                </div>
              </Link>
            ) : (
              <div className="works-item">
                <div className="picture">
                  <div className="content">
                    <div className="text">
                      <h2>{project.name}</h2>
                      <ul>
                        <li>{project.category}</li>
                      </ul>
                    </div>
                  </div>
                  <img src={project.coverImage} alt=" " />
                </div>
              </div>
            )}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ProjectList;
