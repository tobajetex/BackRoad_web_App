import React from "react";

const SectionHeader = ({ title }) => {
  const { titleOne, titleTwo } = title;

  return (
    <div>
      <div className="section-title">
        <h2>
          {titleOne} <span>{titleTwo}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
