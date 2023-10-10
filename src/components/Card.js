import React from "react";
import classNames from "classnames";

const Card = (props) => {
  return (
    <section
      className={classNames(
        "bg-white",
        "p-5",
        "rounded-xl",
        "h-min",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};

export default Card;
