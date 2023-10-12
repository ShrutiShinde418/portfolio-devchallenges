import React from "react";
import Card from "../Card";
import ExperienceItem from "../ExperienceItem";

const Achievement = () => {
  return (
    <Card>
      <p className="uppercase text-gray1 font-semibold text-lg">Achievements</p>
      <ExperienceItem
        duration="March 2022 - March 2023"
        title="Leveraging Potential of Deep Learning for Fruit Quality Detection: A Review"
        subtitle="Review Paper published in the GRENZE International Journal of Engineering and Technology"
      />
    </Card>
  );
};

export default Achievement;
