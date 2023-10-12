import React from "react";
import Card from "../Card";
import Button from "../Button";
import { buttons } from "../../constants/items";

const TabBar = (props) => {
  const handleClick = (e) => {
    props.setActiveTab(e.target.id);
    console.log(e.target.id);
    console.log(e);
  };
  return (
    <Card className="flex flex-col gap-4 items-start">
      <p className="text-gray1 font-normal text-xl">Projects (5)</p>
      <ul className="flex gap-5">
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
