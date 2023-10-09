import React from "react";

const ExperienceItem = (props) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <p className="text-gray2 text-sm">{props.duration}</p>
      <p className="text-gray1 font-semibold">{props.title}</p>
      <p className="text-gray2 mt-2">{props.subtitle}</p>
    </div>
  );
};

export default ExperienceItem;
