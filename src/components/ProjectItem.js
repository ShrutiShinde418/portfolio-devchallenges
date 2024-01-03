import React from "react";
import Card from "./Card";
import RedirectButton from "./RedirectButton";
import classNames from "classnames";

const ProjectItem = (props) => {
  return (
    <Card
      className={classNames(
        "sm:grid sm:grid-cols-[1.25fr,1.75fr] flex flex-col",
        props.cardClasses
      )}
    >
      <img
        src={props.image}
        alt={props.title}
        className={classNames(props.imageClasses, "rounded-lg")}
        loading="lazy"
      />
      <div className="flex flex-col gap-5">
        <ul className="flex flex-wrap lg:gap-4 gap-x-4 gap-y-1 text-gray1">
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="project__title">{props.title}</p>
        <p className="project__description">{props.description}</p>
        <div
          className={classNames(props.buttonClasses, "flex mt-auto mb-5 gap-3")}
        >
          <RedirectButton
            content="Demo"
            className="active-md"
            link={props.demoLink}
          />
          <RedirectButton
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
