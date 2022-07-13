import React from "react";

function WorkDetails({ name, department, position, date, details, awards }) {
  return (
    <div className="flex flex-col font-light ">
      <h2 className="font-medium text-lg font-Lora">{name}</h2>
      <p className="text-sm">{department}</p>
      <p className="italic text-sm"> {position}</p>
      <p className="my-2 text-xs">{date}</p>

      <ul className="mt-4 text-sm list-disc ml-4 space-y-3">
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        {awards?.map((award, i) => (
          <li className="font-medium" key={i}>
            {award}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkDetails;
