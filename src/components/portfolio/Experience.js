import React from "react";
import Card from "../Card";
import ExperienceItem from "../ExperienceItem";
import { experienceItems } from "../../constants/items";

const Experience = () => {
  return (
    <Card className="flex flex-col gap-5">
      <p className="text-gray1 font-normal text-2xl">Experiences</p>
      {experienceItems.map((item) => (
        <ExperienceItem
          duration={item.duration}
          title={item.title}
          subtitle={item.subtitle}
          key={item.title}
        />
      ))}
    </Card>
  );
};

export default Experience;
