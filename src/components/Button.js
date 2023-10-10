import React from "react";
import classNames from "classnames";

const Button = (props) => {
  return (
    <button type={props.type} className={classNames(props.className)}>
      {props.content}
    </button>
  );
};

export default Button;
