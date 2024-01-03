import React from "react";
import Card from "../Card";
import Button from "../Button";
import { buttons } from "../../constants/items";
import { projects } from "../../constants/projects";
import { useState } from "react";

const TabBar = (props) => {
  const [projectNo, setProjectNo] = useState(projects[props.activeTab].length);
  const handleClick = (e) => {
    props.setActiveTab(e.target.id);
    setProjectNo(projects[e.target.id].length);
  };
  return (
    <Card className="flex flex-col gap-4 items-start">
      <p className="text-gray1 font-normal text-xl">Projects ({projectNo})</p>
      <ul className="flex flex-wrap gap-5">
        {buttons.map((button) => (
          <Button
            type="button"
            className={
              props.activeTab === button.content ? "active-sm" : "btn-sm"
            }
            content={button.content}
            key={button.content}
            id={button.content}
            onClick={(e) => handleClick(e)}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TabBar;
