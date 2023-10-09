import React from "react";
import classNames from "classnames";

const Card = (props) => {
  console.log(props.classes);
  return (
    <section
      className={classNames("bg-white", "p-5", "rounded-xl", props.className)}
    >
      {props.children}
    </section>
  );
};

export default Card;
