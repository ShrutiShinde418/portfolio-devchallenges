import React from "react";
import Card from "./Card";
import Button from "./Button";

const ProjectItem = (props) => {
  return (
    <Card className="flex">
      <img
        src={props.image}
        alt="Gallery Page"
        className="max-w-[17rem] rounded-lg"
      />
      <div className="flex flex-col gap-5">
        <ul className="flex gap-4 text-gray1">
          {props.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <p className="project__title">{props.title}</p>
        <p className="project__description">{props.description}</p>
        <div className="flex mt-auto mb-5 gap-3">
          <Button content="Demo" className="active-md" />
          <Button content="Code" className="active-outline" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectItem;
