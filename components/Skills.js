import React from "react";

function Skills() {
  const technicals = [
    "ReactJS",
    "NextJS",
    "Gatsby",
    "WordPress",
    "PHP",
    "Drupal",
    "Netlify CMS",
  ];

  const Styles = [
    "Tailwind CSS",
    "Material Design System",
    "Carbon Design System",
    "Sassy CSS",
    "Figma",
    "Adobe Creative Cloud",
  ];

  const Tools2 = [
    "GitHub",
    "Bitbucket",
    "Jira",
    "Docker",
    "Kubernetes",
    "MongoDB",
  ];

  const Tools = ["Node.js", "Express", "Redux", "MySQL", "NoSQL", "Git"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-12 gap-4">
      <ul>
        {technicals.map((item, i) => (
          <li key={i} className="whitespace-nowrap">
            {item},
          </li>
        ))}
      </ul>
      <ul>
        {Styles.map((item, i) => (
          <li key={i} className="whitespace-nowrap">
            {item},
          </li>
        ))}
      </ul>
      <ul className="">
        {Tools.map((item, i) => (
          <li key={i} className="whitespace-nowrap">
            {item},
          </li>
        ))}
      </ul>
      <ul className="">
        {Tools2.map((item, i) => (
          <li key={i} className="whitespace-nowrap">
            {item},
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
