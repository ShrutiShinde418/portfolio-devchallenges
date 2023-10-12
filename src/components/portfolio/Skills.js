import React from "react";
import Card from "../Card";
import { badges } from "../../constants/items";

const Skills = () => {
  return (
    <Card className="flex flex-col gap-5">
      <p className="uppercase text-gray1 font-semibold text-lg">Front end</p>
      <ul className="flex gap-4 flex-wrap">
        {badges.map((badge) => (
          <li className="badge" key={badge}>
            {badge}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Skills;
