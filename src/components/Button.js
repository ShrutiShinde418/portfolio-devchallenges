import React from "react";
import classNames from "classnames";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={classNames(props.className)}
      onClick={props.onClick}
      id={props.id}
    >
      {props.content}
    </button>
  );
};

export default Button;
