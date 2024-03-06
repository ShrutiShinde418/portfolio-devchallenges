import React, { Fragment, useContext } from "react";
import ProjectItem from "../ProjectItem";
import { projects } from "../../constants/projects";
import { TabBarContext } from "../../store/context";

const TabContent = () => {
  const tabBarContext = useContext(TabBarContext);
  return (
    <Fragment>
      {projects[tabBarContext.activeTab].map((item) => (
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
