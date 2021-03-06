import React, { Component } from "react";

class Experience extends Component {
  experiencesList = [
    {
      id: 1,
      title: "Web Developer",
      startDate: "October 2020",
      endDate: "Present",
      companyName: "IBM - International Business Machines",
      companyUrl: "https://www.ibm.com/",
      desc: [
        "Support development efforts by providing technical expertise and programming skills as needed",
        "Develop web pages/web tools/authoring tools to enable efficient sharing of assets, materials, etc., for the development team",
        "Provide input around tool selection, system setup for solutions",
        "Ensure best practices regarding content management and the use of selected learning technology tools in accordance with IBM standards and guidelines",
        "Submit best practices, related findings as a result of project outcomes to contribute to tools requirements and feature updates as needed."
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      startDate: "July 2018",
      endDate: "October 2020",
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
      id: 3,
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
              <h2>Work Background</h2>
            </div>
          </div>
          <div className="row experience">
            {this.experiencesList.map(
              (
                { title, startDate, endDate, companyName, companyUrl, desc },
                i
              ) => (
                <div key={i} className="col-md-4">
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
          <div className="row">
            <div className="col-md-12">
              <h2>Personal Projects</h2>
            </div>
          </div>
          <div className="row experience">
            <div className="col-md-6">
              <h4 className="title">Web Developer</h4>
              <p>February 2020 - July 2020</p>
              <a
                href="https://rnit-tesda.tech/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Romblon National Institute of Technology
              </a>
              <ul>
                <li>
                  Designed, developed and host a website using Wordpress and
                  Godaddy to help their students inquire and enroll online.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="title">Web Developer</h4>
              <p>June 2018 - August 2018</p>
              <a
                href="https://twc.tesda.gov.ph/"
                rel="noopener noreferrer"
                target="_blank"
              >
                TESDA Women’s Center
              </a>
              <ul>
                <li>
                  Designed and developed a Full stack Website using H TML 5 ,
                  Bootstrap and P H P. This helps the agency to be awarded as ‘
                  Gold ’ during their 2018 Annual Monitoring and Evaluation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
