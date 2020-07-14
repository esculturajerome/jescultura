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
        "Wordpress",
        "MongoDB",
        "Adobe CC",
        "FIgma",
      ],
    },
  ];
  render() {
    const toolsStyle = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      flexItem: "center",
    };
    return (
      <div className="row mt-4">
        {this.toolsList.map(({ tools }, i) => (
          <div key={i} style={toolsStyle}>
            {tools.map((x, j) => (
              <div
                style={{
                  margin: "3px 15px",
                  fontSize: "13px",
                  color: "#6d6d6d",
                }}
                key={j}
              >
                {x}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Tools;
