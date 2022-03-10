import React, { useState } from "react";

type Props = {
  text: string;
  color: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const style = {
    color: props.color,
    border: `2px solid ${props.color}`,
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "white",
  };

  return (
    <button
      className="button-custom-comp"
      style={style}
      onClick={props.onClick}
    >
      My Button!!
    </button>
  );
};

export default Button;
