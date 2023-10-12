import React from "react";
import Card from "./Card";
import Button from "./Button";
import classNames from "classnames";

const ProjectItem = (props) => {
  return (
    <Card
      className={classNames(
        "grid grid-cols-[1.25fr,1.75fr]",
        props.cardClasses
      )}
    >
      <img
        src={props.image}
        alt={props.title}
        className={classNames(props.imageClasses, "rounded-lg")}
      />
      <div className="flex flex-col gap-5">
        <ul className="flex gap-4 text-gray1">
          {props.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <p className="project__title">{props.title}</p>
        <p className="project__description">{props.description}</p>
        <div
          className={classNames(props.buttonClasses, "flex mt-auto mb-5 gap-3")}
        >
          <Button content="Demo" className="active-md" link={props.demoLink} />
          <Button
            content="Code"
            className="active-outline"
            link={props.codeLink}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProjectItem;
