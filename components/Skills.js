import React from "react";

function Skills() {
  const technicals = [
    "ReactJS",
    "NextJS",
    "Gatsby",
    "Drupal",
    "WordPress",
    "PHP",
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

  const Tools = [
    "Node.js",
    "Redux",
    "Git",
    "GitHub",
    "Bitbucket",
    "Jira",
    "MongoDB",
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-12 gap-4">
      <ul>
        {technicals.map((item, i) => (
          <li key={i} className="whitespace-nowrap text-sm">
            {item},
          </li>
        ))}
      </ul>
      <ul>
        {Styles.map((item, i) => (
          <li key={i} className="whitespace-nowrap text-sm">
            {item},
          </li>
        ))}
      </ul>
      <ul className="">
        {Tools.map((item, i) => (
          <li key={i} className="whitespace-nowrap text-sm">
            {item},
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
