import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import Project from './Project';

function ProjectList() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Booklandia',
      desc: 'Website',
      img: 'img/works/booklandia-site.png',
      url: '',
    },
    {
      id: 2,
      name: 'TESDA Womens Center',
      desc: 'Website',
      img: 'img/works/twc.png',
    },
    {
      id: 3,
      name: 'Romblon Institute of Technology',
      desc: 'Website',
      img: 'img/works/fun-run.png',
    },
    {
      id: 4,
      name: 'Finest Aluminum Catalogue',
      desc: 'Design',
      img: 'img/works/finest-catalogue.png',
    },
    {
      id: 5,
      name: 'Finest Aluminum Brochure',
      desc: 'Design',
      img: 'img/works/finest-brochure.png',
    },
    {
      id: 6,
      name: 'P&G Events',
      desc: 'Design',
      img: 'img/works/PandG.png',
    },
    {
      id: 7,
      name: 'DEPED K12 Infographics',
      desc: 'Design',
      img: 'img/works/k12.png',
    },
    {
      id: 8,
      name: 'Famrun 2018',
      desc: 'Design',
      img: 'img/works/fun-run.png',
    },
  ]);

  return (
    <Spring
      from={{ opacity: 0, marginRight: -70 }}
      to={{ opacity: 1, marginRight: 0 }}
      >
      { props => (
        <div style={props}>
          {projects.map(project => (
              <Project project={project} key={project.id} />
          ))}
        </div>
      )}
    </Spring>
  );
}



// <Link className="works-item" key={project.id} to={`/project/${project.id}`}>
//   <div className="picture">
//     <div className="content">
//       <div className="text">
//         <h2>{project.name}</h2>
//         <ul>
//           <li>{project.desc}</li>
//         </ul>
//       </div>
//     </div>
//     <img src={project.img} alt="project-image" />
//   </div>
// </Link>


export default ProjectList;
