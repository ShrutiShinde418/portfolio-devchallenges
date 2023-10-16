import React from "react";

const HobbyItem = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={props.image}
        alt={props.title}
        className="rounded-xl h-36 object-cover"
      />
      <p className="text-black text-lg font-medium">{props.title}</p>
    </div>
  );
};

export default HobbyItem;
