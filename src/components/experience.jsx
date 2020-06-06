import React, { Component } from "react";

class Experience extends Component {
  experiencesList = [
    {
      id: 1,
      title: "Full Stack Developer",
      startDate: "July 2019",
      endDate: "current",
      companyName: "August 99 Inc. - Canstar Division",
      companyUrl: "https://www.august99.com",
      desc: [
        "Develop fronted website architecture and design user interactions on web pages.",
        "Ensure cross-platform optimization for mobile phones.",
        "Design and develop APIs.",
        "Develop in an Agile environment (SCRUM) - Be Agile, Be Lean, MVP vs Perfection.",
        "End to end web development process – Setup dev environment, code – Unit testing.",
        "Develop new features and provide maintenance and support services on existing code.",
      ],
    },
    {
      id: 2,
      title: "Front-end Web Developer",
      startDate: "May 2018",
      endDate: "July 2019",
      companyName: "TESDA Women's Center",
      companyUrl: "http://twc.tesda.gov.ph/",
      desc: [
        "Theme creation involving converting designs into modular templates that can be readily used in a project.",
        "Database design based on client requirements.",
        "Custom plugin development for integrating various APIs.",
        "Ensuring site compatibility across required browsers.",
      ],
    },
    {
      id: 3,
      title: "Computer Instructor",
      startDate: "April 2017",
      endDate: "June 2017",
      companyName: "Children International Inc.",
      companyUrl: "https://www.children.org/",
      desc: [
        "Design, facilitate, and teach the computer instruction component and prepare execute lesson plans, assigning tasks, and evaluating student work and progress.",
      ],
    },
    {
      id: 4,
      title: "VBA Specialist - Intern",
      startDate: "June 2017",
      endDate: "November 2017",
      companyName: "Manulife Business Processing Services",
      companyUrl:
        "http://manulife-global-resourcing.force.com/manila/Manila---About-MBPS-Manila-",
      desc: [
        "Maintain and support existing systems, tools, and macros.",
        "Develop interfaces for departmental SharePoint sites.",
        "Ability to manage multiple tasks, analytic and critical thinking skills.",
        "Organize large amounts of raw data to ease analysis for project managers and management.",
      ],
    },
  ];
  render() {
    return (
      <React.Fragment>
        <div className="about-container">
          <div className="row">
            <div className="col-md-12">
              <h2>Experience</h2>
            </div>
          </div>
          <div className="row experience">
            {this.experiencesList.map(
              (
                { title, startDate, endDate, companyName, companyUrl, desc },
                i
              ) => (
                <div key={i} className="col-md-3">
                  <h4 className="title">{title}</h4>
                  <p>
                    {startDate} - {endDate}
                  </p>
                  <a
                    href={companyUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {companyName}
                  </a>
                  <ul>
                    {desc.map((x, j) => (
                      <li key={j}>{x}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
