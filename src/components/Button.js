import React from "react";
import classNames from "classnames";

const Button = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <button
        type={props.type}
        className={classNames(props.className)}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    </a>
  );
};

export default Button;
