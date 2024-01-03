import React from "react";
import Card from "../Card";
import HobbyItem from "../HobbyItem";
import { hobbiesItem } from "../../constants/items";

const Hobbies = () => {
  return (
    <Card className="flex flex-col gap-5">
      <p className="text-gray1 font-normal text-2xl">Hobbies</p>
      {hobbiesItem.map((item) => (
        <HobbyItem title={item.title} image={item.image} key={item.title} />
      ))}
    </Card>
  );
};

export default Hobbies;
