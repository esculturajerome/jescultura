import React, { Component } from "react";

class Tools extends Component {
  toolsList = [
    {
      id: 1,
      tools: [
        "JavaScript",
        "Angular",
        "ReactJS",
        "SASS",
        "HTML5",
        "PHP",
        "MySQL",
        "ExpressJS",
        "npm",
        "Git",
        "Bitbucket",
        "Jira",
        "Confluence",
        "NodeJS",
        "APIs",
        "Docker",
        "MongoDB",
        "Adobe CC",
        "FIgma",
      ],
    },
  ];
  render() {
    return (
      <div className="row">
        {this.toolsList.map(({ tools }, i) => (
          <div key={i}>
            {tools.map((x, j) => (
              <span key={j}>{x}</span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Tools;
