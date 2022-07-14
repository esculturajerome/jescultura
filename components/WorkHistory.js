import React from "react";
import WorkDetails from "./WorkDetails";

function WorkHistory() {
  const WorkHistory = [
    {
      name: "Deloitte Consulting",
      department: "Deloitte Consulting Philippine Delivery Center",
      position: "Web Consultant",
      date: "February 2022 — Present",
      details: [
        "Developed MVPs website using NextJS and Tailwind",
        "Designed and Developed APIs",
        "Actively focus on developing effective communication and relationship-building skills, with stakeholders, clients and team",
        "Work effectively in diverse teams within a highly inclusive team culture where everyone is supported, respected and recognized for their contribution",
      ],
    },
    {
      name: "International Business Machine (IBM)",
      department: "IBM Business Services",
      position: "Web Consultant",
      date: "October 2020 — February 2022",
      details: [
        "Developed component-based page using ReactJS and Moodle Platform",
        "Actively participate and contribute to the internal Moodle Platform project initiatives",
        "Convert Drupal pages into ReactJS components in IBM Training",
        "Reduced waiting time of Drupal deployment from 1 hour to less than 5 minutes",
        "Developed new features and support E-Learning platform using Moodle",
      ],
      awards: ["Received an Exceptional Performance award — June 2021"],
    },
    {
      name: "August99 Inc.",
      department: "Dojo",
      position: "Full-Stack Developer",
      date: "July 2018 — October 2020",
      details: [
        "Developed new features and support team of 5 people focusing on website integration and conversion to Angular Framework for Canstar Australia",
        "Developed frontend website architecture and designed user interactions",
        "Designed and Developed APIs",
      ],
      awards: ["Received a Developer of the Month award — January 2019"],
    },
    {
      name: "Manulife",
      department: "Manulife Business Processing Services",
      position: "Visual Basic Application Specialist — Intern",
      date: "June 2017 — November 2017",
      details: [
        "Organized large amounts of raw data to ease analysis for project managers and management using Visual Basic Application",
        "Automated manual back-office processing through Visual Basic Application",
        "Eliminated manual checks for insurance data in multiple regions for reporting",
      ],
      awards: ["Received the Best Performer of the Quarter award"],
    },
  ];
  return (
    <>
      <h1 className="text-xl lg:text-2xl mt-12 mb-8 font-Lora">
        My Work History
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        {WorkHistory.map((item, i) => (
          <WorkDetails
            key={i}
            name={item?.name}
            department={item?.department}
            position={item?.position}
            date={item?.date}
            details={item?.details}
            awards={item?.awards}
          />
        ))}
      </div>
    </>
  );
}

export default WorkHistory;
