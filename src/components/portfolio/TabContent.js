import React, { Fragment } from "react";
import ProjectItem from "../ProjectItem";
import { projects } from "../../constants/projects";

const TabContent = ({ activeTab }) => {
  return (
    <Fragment>
      {projects[activeTab].map((item) => (
        <ProjectItem
          title={item.title}
          description={item.description}
          tags={item.tags}
          image={item.image}
          codeLink={item.codeLink}
          demoLink={item.demoLink}
          imageClasses={item.imageClasses}
          cardClasses={item.cardClasses}
          key={item.title}
        />
      ))}
    </Fragment>
  );
};

export default TabContent;
