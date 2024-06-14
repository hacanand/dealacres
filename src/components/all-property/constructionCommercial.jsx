"use client";

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ConstructionCommercial = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const constructionStatusOptions = [
    "New Launch",
    "Under Construction",
    "Ready to Move",

  ];

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleStatus = (status) => {
    if (selectedStatus.includes(status)) {
      setSelectedStatus(selectedStatus.filter((selected) => selected !== status));
    } else {
      setSelectedStatus([...selectedStatus, status]);
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-6"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-lg">Construction Status</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {constructionStatusOptions.map((status) => (
            <div
              key={status}
              onClick={() => toggleStatus(status)}
              className={`cursor-pointer px-4 py-1 border rounded-full w-fit ${
                selectedStatus.includes(status)
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 border-[1px] border-gray-600"
              }`}
            >
              + {status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConstructionCommercial;
