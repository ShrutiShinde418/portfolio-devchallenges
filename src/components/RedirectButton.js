import React from "react";
import classNames from "classnames";

const Button = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={classNames(props.className)}
    >
      {props.content}
    </a>
  );
};

export default Button;
