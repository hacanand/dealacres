import "./navbar.css";

import React from "react";

const FlyoutMenuSections = ({ sections }) => (
  <div className="bg-white flex flex-row px-2 rounded-md">
    <div className="triangle-pointer"></div>
    {sections.map((section, index) => (
      <div key={index} className="bg-white text-black p-4 mb-2">
        <h3 className="font-bold text-lg mb-2">{section.heading}</h3>
        <hr />
        <ul className="mt-2">
       
          {section.items.map((item, i) => (
            <li key={i} className="text-sm">{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FlyoutMenuSections;
